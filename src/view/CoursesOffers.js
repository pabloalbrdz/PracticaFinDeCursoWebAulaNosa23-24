import Article from "../component/Article";
import Header from "../component/Header";
import "./CoursesOffers.css";

function CoursesOffers(){
    let array = new Array();
    for (let i=1; i<=6; i++){
        array.push(<Article title={i}></Article>);
    }

    let ofertascursos = new Array();
    for (let i=1; i<=40; i++){
        ofertascursos.push(<Article title={i}></Article>);
    }
    
    let pagina = 0;
    let inicio = 0;
    let final = 0;

    let pags = new Array();
    while(final < ofertascursos.length){
        inicio = (pagina * 6) + 1;
        final = Math.min((pagina + 1) * 6,ofertascursos.length);
        pags.push(<p>{pagina + 1}</p>)
        pagina++;
    }

    return(
        <div>
            <Header></Header>
            <main>
                <aside>
                    asdsaysdhguy
                </aside>
                <section id="article-section">
                    <div id="ofertascursoslista">
                        {array}
                    </div>
                    <div id="pagination">
                        {pags}
                    </div>
                </section>

            </main>
            <footer></footer>
        </div>
    );
}

export default CoursesOffers;