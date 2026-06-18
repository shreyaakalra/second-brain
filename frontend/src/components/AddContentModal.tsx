import { useState } from "react";

interface contentModelProps{
  open: boolean;
  onClose: () => void;
}

export default function AddContentModal({open, onClose} : contentModelProps){
  
  const[form, setForm] = useState({
    type: "",
    link: "",
    title: "",
    tags: []
  })

  

  return(
    <div>
      

    </div>
  )
}