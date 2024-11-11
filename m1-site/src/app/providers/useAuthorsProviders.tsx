
import { useState } from "react"
import axios from "axios"
import { AuthorModel } from "../models/AuthorsModel"

export const useListAuthorProviders = () =>{

    const [author, setAuthors] = useState<AuthorModel[]>([])

    const loadAuthors = () => {
        axios.get<AuthorModel[]>('http://localhost:3001/Authors')
          .then((response) => {
            setAuthors(response.data)
          }).catch((error) => {
            console.error(error)
          })
      }
      return {
        author,
        loadAuthors,

      }
}