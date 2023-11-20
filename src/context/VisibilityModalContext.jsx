import { createContext, useContext, useState } from "react";

const VisibilityContext = createContext();

const useVisibilityContext = () => {
  return (
    useContext(VisibilityContext)
  )
}

const initialContentModal = {
  trademark: '',
  description: '',
  img_url: '',
  price: 0,
  product_id: null
};

const VisibilityContextProvider = ({ children }) => {

  const [visibilityModal, setVisibilityModal] = useState(false)
  const [contentModal, setContentModal] = useState(initialContentModal)

  const handleContentModal = (el) => {
    setVisibilityModal(true)
    setContentModal({
      trademark: el.trademark,
      description: el.description,
      img_url: el.img_url,
      price: el.price,
      product_id: el.product_id
    })
  }

  const handleDeleteContentModal = () => {
    setVisibilityModal(false);
    setContentModal(initialContentModal);
  }

  const data = { handleContentModal, handleDeleteContentModal, visibilityModal, contentModal };

  return (
    <VisibilityContext.Provider value={data}>
      {children}
    </VisibilityContext.Provider>
  )
}

export default useVisibilityContext
export { VisibilityContextProvider }