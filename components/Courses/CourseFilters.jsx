"use client";

import { useCallback, useTransition, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, Search, SlidersHorizontal, ArrowUpDown, Check, X } from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";

const SORT_OPTIONS = [
  { value: "popular", label: "Newest First" },
  { value: "duration-desc", label: "Longest Duration" },
  { value: "duration-asc", label: "Shortest Duration" },
  { value: "alphabetical", label: "Name: A to Z" },
];

const CourseFilters = ({ categories: rawCategories = [] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [sortDrawerOpen, setSortDrawerOpen] = useState(false);

  // Prepend the "All Categories" entry to whatever the server passed down
  const categories = [
    { id: "all", name: "All Categories", slug: "all" },
    ...rawCategories,
  ];

  const currentCategory = searchParams.get("category") || "all";
  const currentSort = searchParams.get("sort") || "popular";
  const currentSearch = searchParams.get("search") || "";
  const [, startTransition] = useTransition();

  const handleFilterChange = useCallback(
    (key, value) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "all" || value === "popular") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      router.push(`/courses?${params.toString()}`, { scroll: false });
    },
    [searchParams, router]
  );

  const handleSearch = useCallback(
    (e) => {
      const value = e.target.value;
      startTransition(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
          params.set("search", value);
        } else {
          params.delete("search");
        }
        router.push(`/courses?${params.toString()}`, { scroll: false });
      });
    },
    [searchParams, router]
  );

  const currentCategoryObj = categories.find(
    (c) => (c.slug || c.id) === currentCategory
  );
  const currentSortObj = SORT_OPTIONS.find((s) => s.value === currentSort);

  return (
    <ScrollReveal className="flex flex-col gap-4 mb-12 relative z-20">
      {/* ================= DESKTOP VIEW (md and up) ================= */}
      <div className="hidden md:flex items-center gap-3">
        {/* Scrollable pill track with fade edges */}
        <div className="relative flex-1 min-w-0">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 rounded-l-2xl" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 rounded-r-2xl" />

          <div
            className="flex gap-2 overflow-x-auto scrollbar-hide p-1 bg-slate-100 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id || cat.slug}
                onClick={() => handleFilterChange("category", cat.slug || cat.id)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-medium tracking-wide transition-all whitespace-nowrap ${
                  currentCategory === (cat.slug || cat.id)
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="relative flex-shrink-0 min-w-[190px]">
          <select
            value={currentSort}
            onChange={(e) => handleFilterChange("sort", e.target.value)}
            className="w-full appearance-none bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-5 py-3.5 rounded-2xl text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#111]">
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>
      </div>

      {/* ================= MOBILE VIEW (Bottom Sheet Triggers) ================= */}
      <div className="flex md:hidden items-center gap-2.5">
        {/* Category Bottom Sheet Trigger */}
        <button
          onClick={() => setFilterDrawerOpen(true)}
          className={`flex-1 flex items-center justify-between px-4 py-3 rounded-2xl border text-xs font-semibold tracking-wide transition-all ${
            currentCategory !== "all"
              ? "bg-blue-50 dark:bg-blue-500/10 border-blue-500/40 text-blue-600 dark:text-blue-400"
              : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-xs"
          }`}
        >
          <div className="flex items-center gap-2 truncate">
            <SlidersHorizontal size={14} className="shrink-0 text-blue-600 dark:text-blue-400" />
            <span className="truncate">{currentCategoryObj?.name || "Category"}</span>
          </div>
          <ChevronDown size={14} className="shrink-0 text-slate-400" />
        </button>

        {/* Sort Bottom Sheet Trigger */}
        <button
          onClick={() => setSortDrawerOpen(true)}
          className={`flex-1 flex items-center justify-between px-4 py-3 rounded-2xl border text-xs font-semibold tracking-wide transition-all ${
            currentSort !== "popular"
              ? "bg-blue-50 dark:bg-blue-500/10 border-blue-500/40 text-blue-600 dark:text-blue-400"
              : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-xs"
          }`}
        >
          <div className="flex items-center gap-2 truncate">
            <ArrowUpDown size={14} className="shrink-0 text-blue-600 dark:text-blue-400" />
            <span className="truncate">{currentSortObj?.label || "Sort"}</span>
          </div>
          <ChevronDown size={14} className="shrink-0 text-slate-400" />
        </button>
      </div>

      {/* ================= SEARCH INPUT ================= */}
      <div className="relative w-full">
        <Search
          size={16}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />
        <input
          type="text"
          defaultValue={currentSearch}
          onChange={handleSearch}
          placeholder="Search courses by name, tag or keyword…"
          className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 pl-12 pr-6 py-3.5 rounded-2xl text-sm font-medium text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/40 transition-all"
        />
      </div>

      {/* ================= CATEGORY BOTTOM SHEET (VAUL DRAWER) ================= */}
      <Drawer open={filterDrawerOpen} onOpenChange={setFilterDrawerOpen}>
        <DrawerContent className="max-h-[85vh] bg-white dark:bg-[#0f0f0f] border-t border-slate-200 dark:border-white/10 rounded-t-[1.75rem] p-0 font-sans">
          {/* Header with Title on Left, Close on Right */}
          <div className="px-6 py-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
            <div>
              <DrawerTitle className="text-[15px] font-semibold text-slate-900 dark:text-white tracking-normal">
                Filter by Category
              </DrawerTitle>
              <DrawerDescription className="text-xs text-slate-500 font-normal">
                Choose an academic category to filter programs
              </DrawerDescription>
            </div>
            <DrawerClose asChild>
              <button
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={15} />
              </button>
            </DrawerClose>
          </div>

          <div className="p-3 overflow-y-auto max-h-[55vh] space-y-1">
            {categories.map((cat) => {
              const isSelected = currentCategory === (cat.slug || cat.id);
              return (
                <button
                  key={cat.id || cat.slug}
                  onClick={() => {
                    handleFilterChange("category", cat.slug || cat.id);
                    setFilterDrawerOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm transition-all ${
                    isSelected
                      ? "bg-blue-50/80 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium"
                      : "text-slate-600 dark:text-slate-300 font-normal hover:bg-slate-50 dark:hover:bg-white/5"
                  }`}
                >
                  <span>{cat.name}</span>
                  {isSelected && <Check size={16} className="text-blue-600 dark:text-blue-400" />}
                </button>
              );
            })}
          </div>

          <DrawerFooter className="p-4 border-t border-slate-100 dark:border-white/5 flex flex-row gap-3">
            <button
              onClick={() => {
                handleFilterChange("category", "all");
                setFilterDrawerOpen(false);
              }}
              className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors"
            >
              Reset to All
            </button>
            <DrawerClose asChild>
              <button className="flex-1 py-2.5 rounded-xl bg-[#002147] hover:bg-[#003366] text-white text-xs font-medium shadow-xs transition-colors">
                Done
              </button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* ================= SORT BOTTOM SHEET (VAUL DRAWER) ================= */}
      <Drawer open={sortDrawerOpen} onOpenChange={setSortDrawerOpen}>
        <DrawerContent className="max-h-[60vh] bg-white dark:bg-[#0f0f0f] border-t border-slate-200 dark:border-white/10 rounded-t-[1.75rem] p-0 font-sans">
          {/* Header with Title on Left, Close on Right */}
          <div className="px-6 py-4 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
            <div>
              <DrawerTitle className="text-[15px] font-semibold text-slate-900 dark:text-white tracking-normal">
                Sort Courses
              </DrawerTitle>
              <DrawerDescription className="text-xs text-slate-500 font-normal">
                Choose how you want to order courses
              </DrawerDescription>
            </div>
            <DrawerClose asChild>
              <button
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={15} />
              </button>
            </DrawerClose>
          </div>

          <div className="p-3 space-y-1">
            {SORT_OPTIONS.map((opt) => {
              const isSelected = currentSort === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => {
                    handleFilterChange("sort", opt.value);
                    setSortDrawerOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm transition-all ${
                    isSelected
                      ? "bg-blue-50/80 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium"
                      : "text-slate-600 dark:text-slate-300 font-normal hover:bg-slate-50 dark:hover:bg-white/5"
                  }`}
                >
                  <span>{opt.label}</span>
                  {isSelected && <Check size={16} className="text-blue-600 dark:text-blue-400" />}
                </button>
              );
            })}
          </div>

          <DrawerFooter className="p-4 border-t border-slate-100 dark:border-white/5">
            <DrawerClose asChild>
              <button className="w-full py-2.5 rounded-xl bg-[#002147] hover:bg-[#003366] text-white text-xs font-medium shadow-xs transition-colors">
                Done
              </button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </ScrollReveal>
  );
};

export default CourseFilters;
