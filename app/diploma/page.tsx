"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Brain, Layers, GraduationCap } from "lucide-react"
import { allDiplomas, type Diploma } from "./diplomas-data"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

// Group configuration
const groups = [
    {
        id: "ai",
        name: "AI",
        icon: Brain,
        color: "from-purple-400 to-pink-600"
    },
    {
        id: "it-trainings",
        name: "IT Trainings",
        icon: GraduationCap,
        color: "from-green-400 to-emerald-600"
    },
    {
        id: "others",
        name: "Others",
        icon: Layers,
        color: "from-blue-400 to-cyan-600"
    }

]

const diplomas = allDiplomas

export default function DiplomaPage() {
    const [selectedDiploma, setSelectedDiploma] = useState<Diploma | null>(null)
    const [activeGroup, setActiveGroup] = useState<string | null>(null)

    // Check for group query parameter from URL
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const groupParam = params.get('group')
        if (groupParam && ['ai', 'others', 'it-trainings'].includes(groupParam)) {
            setActiveGroup(groupParam)
        }
    }, [])

    // Get all diplomas or filter by group
    const getDiplomas = () => {
        if (activeGroup) {
            return diplomas.filter(d => d.group === activeGroup)
        }
        return diplomas
    }

    const allDiplomas = getDiplomas()

    const handlePrevious = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (!selectedDiploma) return
        const currentIndex = allDiplomas.findIndex(d => d.id === selectedDiploma.id)
        const prevIndex = currentIndex === 0 ? allDiplomas.length - 1 : currentIndex - 1
        setSelectedDiploma(allDiplomas[prevIndex])
    }

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (!selectedDiploma) return
        const currentIndex = allDiplomas.findIndex(d => d.id === selectedDiploma.id)
        const nextIndex = currentIndex === allDiplomas.length - 1 ? 0 : currentIndex + 1
        setSelectedDiploma(allDiplomas[nextIndex])
    }

    // Group diplomas by category
    const groupedDiplomas = groups.reduce((acc, group) => {
        acc[group.id] = diplomas.filter(d => d.group === group.id)
        return acc
    }, {} as Record<string, Diploma[]>)

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Diplomas & Certificates
                </h1>
                <p className="text-center text-gray-400 mb-12">
                    Professional certifications and achievements across multiple domains
                </p>

                {/* Group Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveGroup(null)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeGroup === null
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                    >
                        All
                    </button>
                    {groups.map((group) => {
                        const Icon = group.icon
                        const count = groupedDiplomas[group.id]?.length || 0
                        return (
                            <button
                                key={group.id}
                                onClick={() => setActiveGroup(group.id)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${activeGroup === group.id
                                    ? `bg-gradient-to-r ${group.color} text-white shadow-lg`
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                {group.name}
                                {count > 0 && (
                                    <span className="ml-1 px-2 py-0.5 rounded-full bg-black/30 text-xs">
                                        {count}
                                    </span>
                                )}
                            </button>
                        )
                    })}
                </div>

                {/* Diplomas Grid - Grouped Display */}
                {activeGroup === null ? (
                    // Show all groups
                    groups.map((group) => {
                        const groupDiplomas = groupedDiplomas[group.id] || []
                        if (groupDiplomas.length === 0) return null

                        const Icon = group.icon
                        return (
                            <div key={group.id} className="mb-16">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`p-2 rounded-lg bg-gradient-to-r ${group.color}`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">{group.name}</h2>
                                    <span className="text-gray-500 text-sm">({groupDiplomas.length})</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {groupDiplomas.map((diploma) => (
                                        <div
                                            key={diploma.id}
                                            className="group relative bg-gray-900/50 rounded-xl overflow-hidden cursor-pointer border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                                            onClick={() => setSelectedDiploma(diploma)}
                                        >
                                            <div className="aspect-[4/3] relative overflow-hidden bg-gray-800">
                                                <Image
                                                    src={diploma.image}
                                                    alt={diploma.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                                        // Prevent event from being logged as [object Event]
                                                        e.preventDefault()
                                                        e.stopPropagation()
                                                        // Fallback to placeholder if image doesn't exist
                                                        const target = e.currentTarget as HTMLImageElement
                                                        if (target && target.src !== "/diploma-placeholder.png") {
                                                            target.src = "/diploma-placeholder.png"
                                                        }
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                                                    {diploma.title}
                                                </h3>
                                                {diploma.date && (
                                                    <p className="text-gray-500 text-sm mb-2">{diploma.date}</p>
                                                )}
                                                {diploma.description && (
                                                    <p className="text-gray-400 text-sm line-clamp-2">
                                                        {diploma.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })
                ) : (
                    // Show filtered group
                    (() => {
                        const groupDiplomas = groupedDiplomas[activeGroup] || []
                        const group = groups.find(g => g.id === activeGroup)
                        if (!group) return null

                        const Icon = group.icon
                        return (
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`p-2 rounded-lg bg-gradient-to-r ${group.color}`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">{group.name}</h2>
                                    <span className="text-gray-500 text-sm">({groupDiplomas.length})</span>
                                </div>
                                {groupDiplomas.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {groupDiplomas.map((diploma) => (
                                            <div
                                                key={diploma.id}
                                                className="group relative bg-gray-900/50 rounded-xl overflow-hidden cursor-pointer border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                                                onClick={() => setSelectedDiploma(diploma)}
                                            >
                                                <div className="aspect-[4/3] relative overflow-hidden">
                                                    <Image
                                                        src={diploma.image}
                                                        alt={diploma.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />
                                                </div>
                                                <div className="p-6">
                                                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                                                        {diploma.title}
                                                    </h3>
                                                    {diploma.date && (
                                                        <p className="text-gray-500 text-sm mb-2">{diploma.date}</p>
                                                    )}
                                                    {diploma.description && (
                                                        <p className="text-gray-400 text-sm line-clamp-2">
                                                            {diploma.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12 text-gray-500">
                                        No diplomas found in this category.
                                    </div>
                                )}
                            </div>
                        )
                    })()
                )}

                {/* Lightbox Modal */}
                <Dialog open={!!selectedDiploma} onOpenChange={(open) => !open && setSelectedDiploma(null)}>
                    <DialogContent className="max-w-6xl w-full max-h-[90vh] bg-gray-900 border-gray-800 p-0 overflow-hidden">
                        <DialogTitle className="sr-only">
                            {selectedDiploma?.title}
                        </DialogTitle>

                        <div className="relative flex flex-col h-full max-h-[90vh]">
                            <button
                                onClick={() => setSelectedDiploma(null)}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Navigation Arrows */}
                            {allDiplomas.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrevious}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm group"
                                        aria-label="Previous diploma"
                                    >
                                        <ChevronLeft className="w-8 h-8 group-hover:-translate-x-0.5 transition-transform" />
                                    </button>

                                    <button
                                        onClick={handleNext}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm group"
                                        aria-label="Next diploma"
                                    >
                                        <ChevronRight className="w-8 h-8 group-hover:translate-x-0.5 transition-transform" />
                                    </button>
                                </>
                            )}

                            <div className="relative w-full flex-1 min-h-[50vh] bg-black/50">
                                {selectedDiploma && (
                                    <Image
                                        src={selectedDiploma.image}
                                        alt={selectedDiploma.title}
                                        fill
                                        className="object-contain p-4"
                                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            const target = e.currentTarget as HTMLImageElement
                                            if (target && target.src !== "/diploma-placeholder.png") {
                                                target.src = "/diploma-placeholder.png"
                                            }
                                        }}
                                    />
                                )}
                            </div>

                            <div className="p-6 bg-gray-900 border-t border-gray-800 z-40">
                                <h2 className="text-2xl font-bold text-white mb-2">{selectedDiploma?.title}</h2>
                                {selectedDiploma?.date && (
                                    <p className="text-gray-400 text-sm mb-2">Issued: {selectedDiploma.date}</p>
                                )}
                                {selectedDiploma?.description && (
                                    <p className="text-gray-300">{selectedDiploma.description}</p>
                                )}
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
