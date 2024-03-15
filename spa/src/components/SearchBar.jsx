import { useState } from "react";
import Select from "react-tailwindcss-select";

const specializations = [
    { value: "Cardiologist", label: "🫀 Cardiologist" },
    { value: "Nutritionist", label: "🥗 Nutritionist" },
    { value: "Neurologist", label: "🧠 Neurologist" },
    { value: "Ent", label: "👂🏼 Ent" },
    { value: "Ophthalmologist", label: "👓 Ophthalmologist" },
];

const SearchBar = () => {
    const [specialization, setSpecialization] = useState(null);

    const handleChange = value => {
        setSpecialization(value);
    };

    return (
        <Select
            value={specialization}
            onChange={handleChange}
            options={specializations}
            primaryColor={"blue"}
            isMultiple={true}
            placeholder="Select Specialization"
            isSearchable={true}
        />
        
    );
};

export default SearchBar;