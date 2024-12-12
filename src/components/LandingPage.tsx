
function LandingPage() {
    return (
        <>
            <div className="land-page h-dvh w-dvh flex">
                <div className="z-10 h-full w-full p-4 flex flex-col justify-">
                    <span className="flex flex-col mt-24 ml-14 cursor-default">
                        <span className="-mt-3 text-8xl font-bold ">React App</span>
                    </span>
                    <span className="ml-16">Built with Reactjs + Tailwindcss</span>
                    <div className="grow"></div>
                    <button className="flex self-end mb-20 bg-sky-500 py-1.5 px-6 rounded-full text-white">Get Inside</button>
                </div>
            </div>
        </>
    )
}

export default LandingPage;