const PageHeading = ({
    title,
    subtitle,
    description,
}: {
    title: string;
    subtitle: string;
    description: string;
}) => {
    return (
        <div className="my-8 flex flex-col items-center pb-6 text-center">
            <p className="bg-linear-to-r from-purple-300 to-transparent px-3 py-1 rounded-l-full mb-4 font-medium">
                {title}
            </p>

            <h2 className="text-french-blue-700 mb-4 text-3xl font-bold sm:text-4xl">
                {subtitle}
            </h2>

            {/* <p className="text-charcoal/70 max-w-2xl text-base leading-relaxed">
                {description}
            </p> */}
        </div>
    );
};

export default PageHeading;