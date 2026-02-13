import CourseListingPage from "./CourseListingPage";

export default function Page() {
    return (
       <CourseListingPage />
    );
}

export async function generateMetadata({ params }) {
    const { category } = await params;
    
    // Mapping for specific titles or fallback to formatted slug
    const titles = {
        "certifications": "Industry Certifications",
        "al-ict": "A/L ICT Mastery",
        "software-engineering": "Software Engineering",
        "data-science": "Data Science",
        "cyber-security": "Cyber Security",
        "cloud-computing": "Cloud Computing"
    };

    const displayTitle = titles[category] || category
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return {
        title: `${displayTitle} - IVTC Campus`,
        description: `Explore our ${displayTitle} courses and programs at IVTC Campus.`,
    };
}