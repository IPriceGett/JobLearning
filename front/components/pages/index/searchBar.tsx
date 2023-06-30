import { useState, ChangeEvent } from "react";

const SearchBar = (): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearch = () => {
        // Aquí puedes realizar la acción de búsqueda con la query 'searchQuery'
        console.log("Realizando búsqueda:", searchQuery);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="flex items-center">
            <input
                type="text"
                className="border border-none bg-[#8E8E8E] placeholder-[#464646] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="🔎 ¿Qué buscas?"
                value={searchQuery}
                onChange={handleChange}
            />
            {/* <button
                className="bg-blue-500 text-white rounded-r px-4 py-2 ml-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleSearch}
            >
                Buscar
            </button> */}
        </div>
    );
};

export default SearchBar;
