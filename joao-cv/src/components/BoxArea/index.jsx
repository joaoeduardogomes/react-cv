export default function BoxArea({ title, children }) {
    return (
        <>
            <section 
                id={`${title.toLowerCase().split(' ').join('-')}-section`}
                className="text-myWhite md:w-3/6 print:w-3/6"
            >
                <h2 className="relative uppercase font-extrabold bg-myPurple w-fit py-2 px-6 -mb-3 -ml-2 rounded-md">{title}</h2>
                <div className="bg-myBlack p-6 min-h-fit h-full rounded-lg flex flex-col gap-6">
                    {children}
                </div>
            </section>
        </>
    )
}