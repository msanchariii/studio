import { sectionDescriptions } from "@/data/globals";
import SectionHeadlines from "@/data/SectionHeadlines";
import QuoteForm from "@/components/QuoteForm";
import ContactPage from "@/components/sections/Contact";

export const metadata = {
    title: "Get a Quote",
    description:
        "Need a custom website or digital product? Fill out our quote form to get a personalized estimate based on your project requirements.",
};

const GetAQuotePage = () => {
    // const [estimatedCost, setEstimatedCost] = useState(0);
    return (
        <>
            <ContactPage />
        </>
    );
};

export default GetAQuotePage;
