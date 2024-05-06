import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'

const Computers = ({ismobile}) => {

  const computer = useGLTF('./desktop_pc/scene.gltf')
 
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black"/>
      <pointLight intensity={1}/>
      <primitive
        object={computer.scene}
        scale={ismobile? 0.25 : 0.4}
        position={ismobile? [1,-1,0] : [0,-1.5,-0.5]}
        rotation={[-0.01,-0.5,-0.1]}
      />
    </mesh> 
  )
}

const ComputersCanvas = () => {
   const [ismobile,setismobile] = useState(false);


   useEffect(()=> {
    
 
    const mediaQuery = window.matchMedia('(max-width: 700px)');  //const media query fazendo a consulta no css para verificar se a janela é menor ou igual a 500px 

   

    const handleMediaQueryChange = (event) => {
      setismobile(event.matches);

    }   // essa uma variavel que recebe uma arrow fuction para representar a troca de mediaquery pra true pra false o event recebe o matches que vai ser definido acima então sempre
    // vai fazer a verificação na linha 30 e depois vai cerregar o matches com um boolean e a cada alteração do mediaquery abaixa ou acima de 500 o matches vai ser o false o true

    mediaQuery.addEventListener("change", handleMediaQueryChange) //sempre que acontecer uma mudanççade evento no mediaquery a consulta de midia ira mudar quando a largura da janela for alterada
    //a função handlemediaquerychange sera chamada

    return () => {

      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    } // esta parte é uma limpeza do hook, é importante para que nao haja vazamento de memoria 


   }, []);

  return (
   <Canvas 
    frameLoop= 'demand'
    shadows
    camera={ {position: [20,3,5], fov:15}}
    gl={{preserveDrawingBuffer:true}}
   >
       <Suspense fallback={<CanvasLoader/>}>

        <OrbitControls
         enableZoom={false}
         maxPolarAngle={Math.PI / 2}
         minPolarAngle={Math.PI / 2}
        
        />

       <Computers ismobile={ismobile}/>
        
       </Suspense>
   

   <Preload all />


   </Canvas>

  )




}

export default ComputersCanvas