export const TeamHeader = () => {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="font-extrabold text-xl">
                🔴⚫ Flamengo
            </h1>
            <p>
                Um dos maiores times do Brasil. Campeão mundial e o segundo maior campeão nacional!
            </p>

            <div className="flex gap-2 items-center">
                <button className="py-2 px-4 bg-paper rounded-full">
                    Compartilhar
                </button>

                <span>
                    Uma vez Flamengo, Flamengo até morrer.
                </span>
            </div>
        </div>
    )
}