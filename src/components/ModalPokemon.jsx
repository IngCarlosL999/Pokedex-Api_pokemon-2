// import { IconCurrencyXrp } from '@tabler/icons-react';


// const ModalPokemon = ({showModalPokemon, closeModalPokemon}) => {
//   return (
//     <section 
    
//         className=
//         {
//         `fixed top-0 left-0 right-0 h-screen bg-yellow-200 
//          transition-all duration-1000
//         ${showModalPokemon ? "visible opacity-100" : "invisible opacity-0"

//         }`}>

//         <button 
//         onClick={closeModalPokemon}
//         className='bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity'>
//         <IconCurrencyXrp size={32} stroke={4} />
//         </button>

//         <article 
//         className=
//         {`bg-white h-[85%] w-full absolute  rounded-tl-3xl rounded-tr-3xl text-center
//         transition-all duration-1000
//         ${showModalPokemon ? "bottom-0" : "-bottom-full"}`}>
//             Pokemon
//         </article>     
   
    
//     </section>
//   )
// }

//  export default ModalPokemon

// import { IconCurrencyXrp } from '@tabler/icons-react';

// const ModalPokemon = ({ showModalPokemon, closeModalPokemon }) => {
//   return (
//     <section 
//       className={`fixed top-0 left-0 right-0 h-screen bg-yellow-200 
//                   transition-opacity duration-500 
//                   ${showModalPokemon ? "visible opacity-100" : "invisible opacity-0"}`}>
      
//       <button 
//         onClick={closeModalPokemon}
//         className='bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity'>
//         <IconCurrencyXrp size={32} stroke={4} />
//       </button>

//       <article 
//         className={`bg-white h-[85%] w-full absolute rounded-tl-3xl rounded-tr-3xl text-center
//                     transition-all duration-500 
//                     ${showModalPokemon ? "bottom-0" : "-bottom-full"}`}>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
//           {/* Card 1 */}
//           <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
//             <h2 className="text-2xl font-bold mb-2">¡Bienvenido al Mundo Pokémon!</h2>
//             <p className="text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque corrupti, non error dignissimos ullam accusantium assumenda eos tempora repellat, est amet eveniet ducimus. Nulla fuga minima nobis doloribus labore quis, accusamus, ducimus officiis distinctio explicabo non tempore enim. Alias, placeat!Aquí podrás explorar y conocer a todos tus Pokémon favoritos.</p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
//             <h2 className="text-2xl font-bold mb-2">Información del Pokémon</h2>
//             <p className="text-gray-700"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. At officiis porro natus nisi iusto distinctio nemo cupiditate blanditiis sed, consequuntur animi a ipsam dolore ipsum, accusantium, exercitationem soluta neque. Vel dignissimos sint incidunt ad necessitatibus sunt voluptates? Reiciendis, quis repellat. Aquí puedes encontrar detalles sobre los Pokémon, sus tipos, habilidades y más.</p>
//           </div>
//         </div>
//       </article>     
//     </section>
//   );
// }

// export default ModalPokemon;

import { IconCurrencyXrp } from '@tabler/icons-react';

const ModalPokemon = ({ showModalPokemon, closeModalPokemon }) => {
  return (
    <section 
      className={`fixed top-0 left-0 right-0 h-screen bg-yellow-200 
                  transition-opacity duration-500 
                  ${showModalPokemon ? "visible opacity-100" : "invisible opacity-0"}`}>
      
      <button 
        onClick={closeModalPokemon}
        className='bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity'>
        <IconCurrencyXrp size={32} stroke={4} />
      </button>

      <article 
        className={`bg-white h-[85%] w-full absolute rounded-tl-3xl rounded-tr-3xl text-center
                    transition-all duration-500 
                    ${showModalPokemon ? "bottom-0" : "-bottom-full"}`}>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-2">¡Bienvenido al Mundo Pokémon!</h2>
            <p className="text-gray-700">Aquí podrás explorar y conocer a todos tus Pokémon favoritos.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-2">Información del Pokémon</h2>
            <p className="text-gray-700">Encuentra detalles sobre los Pokémon, sus tipos, habilidades y más.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-2">Pokémon Legendarios</h2>
            <p className="text-gray-700">Descubre los Pokémon legendarios y sus historias fascinantes.</p>
          </div>
        </div>
      </article>     
    </section>
  );
}

export default ModalPokemon;