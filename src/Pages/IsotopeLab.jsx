import React from "react"
import Isotope from "isotope-layout"
import NotesG from "../Components/Notes/NotesG"
import NotesM from "../Components/Notes/NotesM"
import Materia from "../Components/Materia/Materia";
import Aos from "aos"; 
import "aos/dist/aos.css";

const IsotopeLab = () => {

  React.useEffect(()=>{
    Aos.init({ duration: 3000 });
  }, []);


      // init one ref to store the future isotope object
  const isotope = React.useRef()
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState('Materias')

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    })
    // cleanup
    return () => isotope.current.destroy()

  }, [])

  // handling filter key change
  React.useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`})
  }, [filterKey])

  const handleFilterKeyChange = key => () => setFilterKey(key)


    return ( 
        <div>
          <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="section-title py-5">
                <h2>Materias</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                      <li onClick={handleFilterKeyChange('Materias')}>Materias</li>
                      <li onClick={handleFilterKeyChange('Notes')}>Notas Generales</li>
                      <li onClick={handleFilterKeyChange('*')}>Ver Todo</li>
                  </ul>
              </div>
            </div>

            <hr />
            <ul className="filter-container">
                <div className="filter-item Notes">
                  <NotesM/>
                </div>
                <div className="filter-item Materias">
                  <Materia/>
                </div>
                <div className="filter-item Materias">
                  <Materia/>
                </div>
                <div className="filter-item Notes">
                  <NotesM/>
                </div>
                <div className="filter-item Notes">
                  <NotesM/>
                </div>

            </ul>
        </div>
        </section>
      </div>
     );
}
 
export default IsotopeLab;