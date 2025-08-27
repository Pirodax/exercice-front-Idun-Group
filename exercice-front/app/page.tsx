
import Produicts from "../components/ui/Produicts";
import Hero from "../components/ui/Hero";
export default function Home() {
  return ( 
     <main className="relative bg-white flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip no-caret">
      <div>
         
         <Hero/>
          <Produicts/>
      </div>

     </main>
  );
}