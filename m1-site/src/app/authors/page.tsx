'use client';
import { useRouter } from "next/navigation";
import { Title } from '.././components/Title';
import { GlobalLayout } from "../GlobalLayout";
import { Card } from '../components/CardSearch';
import { SearchBar } from '../components/searchBar';
import { useListAuthorProviders } from '../providers/useAuthorsProviders';
import { ButtonAdmin } from "../components/BoutonAdmin";
import { useState } from "react";
import { ModalAddAuthor } from "../components/ModalAddAuthor";
import Image from "next/image";

import { AuthorModel } from '../models/AuthorsModel';

function Authors(){
 
  const router = useRouter();
  const { authors , setSearchQuery } = useListAuthorProviders();
  const [modalAddAuthorIsOpen, setModalAddAuthorIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Déclare une variable d'état pour le bouton

  // const getButtonStyle = () => {
  //   return isAdmin ? "bg-red-400" : "bg-custom-light"; // Appliquer un style différent si isAdmin est true
  // };

    return(
        
        <GlobalLayout>
          <Title>Page auteurs</Title>
          
          <SearchBar onSearch={setSearchQuery} />
          <div className="min-h-screen ml-10 mr-10 flex flex-wrap  justify-center gap-6 ">
          {authors.length === 0 ? (
          <p className="text-center text-xl text-gray-600">Aucun auteur trouvé.</p>
        ) : (
          
          authors.map((author : AuthorModel) => (
          <Card
            key={author.id}
            coverImage={author.photoPath  || '/images/auteur/NicePng_user-png_730154.png'}
            title={author.firstName + ' ' + author.lastName}
            line1={"Nombre de livres :"}
            line2={author.bookCount || 0}
            rating={author.averageRating || 0}
            isBook={false}
            onClick={() => router.push('/authors_details/'+author.id)}
          />
          )
        ))}
      </div>

      {modalAddAuthorIsOpen ? <ModalAddAuthor setModalAddAuthorIsOpen={setModalAddAuthorIsOpen} /> : <></>}

      <ButtonAdmin onClick={() => setModalAddAuthorIsOpen(true)} className={`mb-12`} aria-label="Authors">
        <Image src="/images/icon/icons8-ajouter-50.png" alt="" width={24} height={24} />
      </ButtonAdmin>

        </GlobalLayout>
        

    ) 
}
 export default Authors;