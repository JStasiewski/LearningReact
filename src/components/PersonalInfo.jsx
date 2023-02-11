import { motion } from "framer-motion";
import photo from "../photo/content.png";

const PersonalInfo = ({ page, setPage, x, setX }) => {
  return (
    <motion.div
      className="card"
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
      <div className="card-title">O mnie</div>

      <div className="cv">
        <div className="soft">
          <img className="cv_photo" src={photo} alt="Zdjecie do CV" />
          <h3 className="soft_cat">Dane osobowe</h3>
          <ul className="soft_list_elem">
            <li className="soft_elem">
              <span className="soft_elem_ht">Data Urodzenia:</span>
              <br />
              42.06.0991
            </li>
            <hr />
            <li className="soft_elem">
              <span className="soft_elem_ht">Adres:</span>
              <br />
              Nieznane
            </li>
            <hr />
            <li className="soft_elem">
              <span className="soft_elem_ht">Telefon:</span>
              <br />
              <a href="tel:420-213-769" style={{ color: "white" }}>
                420 213 769
              </a>
            </li>
            <hr />
            <li className="soft_elem">
              <span className="soft_elem_ht">Email:</span>
              <br />
              <a
                href="mailto: unknown"
                style={{ color: "white" }}
              >
                unknown
              </a>
            </li>
          </ul>
          <h3 className="soft_cat">Technologie</h3>
          <ul className="soft_list_elem">
            <li className="soft_elem">
              <span className="soft_elem_ht">C/C++</span>
            </li>
            <hr />
            <li className="soft_elem">
              <span className="soft_elem_ht">Java Script</span>
            </li>
            <hr />
            <li className="soft_elem">
              <span className="soft_elem_ht">HTML</span>
            </li>
            <hr />
            <li className="soft_elem">
              <span className="soft_elem_ht">CSS</span>
            </li>
            <hr />
            <li className="soft_elem">
              <span className="soft_elem_ht">React</span>
            </li>
            <hr />
            <li className="soft_elem">
              <span className="soft_elem_ht">MatLab</span>
            </li>
            <hr />
            <li className="soft_elem">
              <span className="soft_elem_ht">GitLab</span>
            </li>
            <hr />
          </ul>
        </div>

        <div className="hard">
          <div className="hard_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          </div>
          <br />
          <div className="hard_title">Wykształcenie</div>
          <table className="hard_table">
            <tr>
              <th>10.2020 – obecnie</th>
              <td>
                <div className="hard_table_name">Lorem Ipsum is simply</div>
                <div>Kierunek: Lorem Ipsum is simply</div>
                <div>Poziom wykształcenia: Lorem Ipsum is simply</div>
              </td>
            </tr>
            <tr>
              <th>09.2012 – 06.2021</th>
              <td>
                <div className="hard_table_name">
                  VII Liceum Ogólnokształcące Lorem Ipsum is simply
                </div>
                <div>
                  Specjalizacja: Lorem Ipsum is simply
                </div>
                <div>Poziom wykształcenia: no tak średnie bym powiedział</div>
              </td>
            </tr>
            <tr>
              <th>09.1981 – 06.2077</th>
              <td>
                <div className="hard_table_name">
                  Szkoła podstawowa
                </div>
                <div>Poziom wykształcenia: podstawowe</div>
              </td>
            </tr>
          </table>

          <div className="hard_title">Doświadczenie zawodowe</div>
          <table className="hard_table">
            <tr>
              <th>08.2020 – 09.2173</th>
              <td>
                <div className="hard_table_name">Lorem Ipsum is simply</div>
                <div>Wikipedia | Mars</div>
              </td>
            </tr>
            <tr>
              <th>07.2019 – 08.2019</th>
              <td>
                <div className="hard_table_name">Lorem Ipsum is simply</div>
                <div>Lorem | Ipsum</div>
              </td>
            </tr>
          </table>

          <div className="hard_title">Znajomość języków</div>
          <table className="hard_table">
            <tr>
              <td>
                <div className="hard_table_name">Angielski</div>
                <div>Poziom: zaawansowany</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="hard_table_name">Niemiecki</div>
                <div>Poziom: podstawowy</div>
              </td>
            </tr>
          </table>

          <div className="hard_title">Zainteresowania</div>
          <table className="hard_table">
            <tr>
              <td>
                <div>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
