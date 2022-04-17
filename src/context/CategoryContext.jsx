import { useState, createContext, useContext, useEffect } from "react";
import { useAxios } from "../utils/useAxios";

const CategoryContext = createContext();

const useCategory = () => useContext(CategoryContext);

const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryList, setCategoryList] = useState([]);

  const { makeRequest, response } = useAxios();

  useEffect(() => {
    makeRequest({
      method: "get",
      url: "/api/categories",
    });
  }, []);

  useEffect(() => {
    if (response) {
      setCategoryList(response.categories);
    }
  }, [response]);

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory, categoryList }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, useCategory };
