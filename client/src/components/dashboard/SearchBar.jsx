import { Search } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="relative">

            <Search
                size={18}
                className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-zinc-500
                "
            />

            <input
                type="text"
                placeholder="Search friends..."
                className="
                w-full
                rounded-xl
                bg-white/5
                pl-11
                pr-4
                py-3
                outline-none
                border
                border-white/10
                focus:border-purple-500
                "
            />

        </div>
    );
};

export default SearchBar;