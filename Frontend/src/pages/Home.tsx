import { useState } from "react";

export function Home() {
    const [statutFormule1, setStatutFormule1] = useState("Disponible");
    const [statutFormule2, setStatutFormule2] = useState("Disponible");
    const [statutFormule3, setStatutFormule3] = useState("Disponible");


  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <header className="banner">
            <h1 className="text-4xl font-bold mb-4" style={{ textAlign: "center" }}>
            Welcome to Fon's lunge
        </h1>
        </header>

        <section className="formules-container">

            <div className="Formule1">
                <img src="/massage_image_f1.webp" alt="Massage" width="300" height="150" />
                <div className="paddF1">
                    <h1 className="h1inF1">
                        Regular: 60 min massage
                    </h1>
                    <div className="inF1">
                        <p>Dans cette première formule, vous bénéficierez d'un massage de 60 minutes dans un environnement relaxant et professionnel.</p>
                    </div>
                    <button onClick={()=>setStatutFormule1("Reservé!")} className="button1F1">Book Now</button>
                    <button onClick={()=>setStatutFormule1(("Non reservé"))} className="button2F1">Cancel Now</button>
                    <p className="mb-2 text-sm font-medium text-amber-600">{statutFormule1}</p>
                    <br></br>
                </div>
            </div>


            <div className="Formule2">
                <img src="/spa-body-oil-therapy-session-massage-hands-relaxation_169016-69553.webp" alt="Massage" width="300" height="150" />
                <div className="paddF1"></div>
                <div className="paddF1">
                    <h1 className="h1inF1">
                        Regular: 120 min massage
                    </h1>
                    <div className="inF1">
                        <p>Dans cette première formule, vous bénéficierez d'un massage de 120 minutes dans un environnement relaxant et professionnel.</p>
                    </div>
                    <button onClick={()=>setStatutFormule2("Reservé!")} className="button1F1">Book Now</button>
                    <button onClick={()=>setStatutFormule2(("Non reservé"))} className="button2F1">Cancel Now</button>
                    <p className="mb-2 text-sm font-medium text-amber-600">{statutFormule2}</p>
                </div>
            </div>

            <div className="Formule3">
                <img src="/shutterstock_2232469005-2.webp" alt="Massage" width="300" height="150" />
                <div className="paddF1"></div>
                <div className="paddF1">
                    <h1 className="h1inF1">
                        Regular: 180 min massage
                    </h1>
                    <div className="inF1">
                        <p>Dans cette première formule, vous bénéficierez d'un massage de 180 minutes dans un environnement relaxant et professionnel.</p>
                    </div>
                    <button onClick={()=>setStatutFormule3("Reservé!")} className="button1F1">Book Now</button>
                    <button onClick={()=>setStatutFormule3(("Non reservé"))} className="button2F1">Cancel Now</button>
                    <p className="mb-2 text-sm font-medium text-amber-600">{statutFormule3}</p>
                </div>
            </div>

        </section>

    </main>
  );
}


export default Home;