"use client";

import Modal from "@/components/Modal/Modal";
import { useState } from "react";

export default function Home() {
    const [close, setClose] = useState<boolean>(false);
    const clickHandler = () => {
        setClose(!close);
    };
    return (
        <main className="bg-green-400">
            <button onClick={clickHandler}>متن تستی حهت نمایش.</button>
            <Modal
                setClose={setClose}
                positionCloseBtn="absolute top-2 right-2"
                closeSvgBtnSize={20}
                show={close}
                classNameContainer="relative w-[80%] p-6 bg-white rounded-lg shadow-lg"
                classNameBackGround="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-30 backdrop-blur-[2px]"
            >
                <h2>Modal Content</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum assumenda architecto earum eius? Quod totam nesciunt
                    beatae aspernatur itaque commodi vitae, aperiam rerum modi
                    ea ad voluptatum quo velit nemo? Debitis at pariatur aliquam
                    deserunt, consectetur quasi qui! Iure, corrupti pariatur.
                    Optio repellat possimus nesciunt placeat iusto harum, saepe
                    unde!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum assumenda architecto earum eius? Quod totam nesciunt
                    beatae aspernatur itaque commodi vitae, aperiam rerum modi
                    ea ad voluptatum quo velit nemo? Debitis at pariatur aliquam
                    deserunt, consectetur quasi qui! Iure, corrupti pariatur.
                    Optio repellat possimus nesciunt placeat iusto harum, saepe
                    unde!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum assumenda architecto earum eius? Quod totam nesciunt
                    beatae aspernatur itaque commodi vitae, aperiam rerum modi
                    ea ad voluptatum quo velit nemo? Debitis at pariatur aliquam
                    deserunt, consectetur quasi qui! Iure, corrupti pariatur.
                    Optio repellat possimus nesciunt placeat iusto harum, saepe
                    unde!
                </p>
            </Modal>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Beatae, aperiam. Quod quibusdam, aliquam nesciunt rem doloremque
                rerum et obcaecati perferendis accusamus inventore ratione
                quaerat natus non hic nisi deleniti veritatis dignissimos velit
                nobis. A in numquam perspiciatis natus omnis molestias eum
                veritatis nam praesentium ad deleniti voluptatum molestiae
                expedita veniam quasi non possimus error, quisquam porro magni,
                eius iusto quis. Sapiente nostrum delectus reiciendis
                praesentium odio vel corrupti quas id, rerum maiores architecto?
                Ea voluptatum rem sunt reiciendis commodi quis nobis sapiente
                cupiditate numquam necessitatibus fugiat pariatur, omnis
                aspernatur corporis incidunt veritatis quaerat vel enim
                repellat? Consequuntur expedita reiciendis fugiat unde? Cum
                placeat vel ut ducimus culpa libero labore id. Provident tempore
                autem numquam facere, debitis nemo voluptas neque molestiae
                aspernatur sequi explicabo necessitatibus incidunt quaerat?
                Quaerat illo harum rem optio temporibus tenetur deleniti,
                perferendis reprehenderit hic ex. Quasi deserunt perspiciatis,
                nostrum omnis, incidunt, eum consectetur voluptate facere
                deleniti quod alias voluptas nam! Et dolore perspiciatis
                asperiores dolor blanditiis, necessitatibus facilis aspernatur
                aliquid consequatur temporibus mollitia sint amet molestias,
                ipsa pariatur consequuntur in adipisci ratione expedita dicta
                dignissimos beatae facere. Tenetur sunt consequuntur eveniet
                esse, quam nesciunt! Similique dicta eius modi iste magni
                quidem, nisi ad perferendis officia qui id fugiat incidunt
                beatae a nostrum, rerum reprehenderit recusandae. Mollitia ad
                esse consequatur commodi earum rerum officia architecto vero est
                accusamus deleniti maiores excepturi voluptas, sint eligendi
                iusto exercitationem omnis odio accusantium quidem expedita
                consectetur repellat. Doloremque id quo possimus nemo
                voluptatibus adipisci culpa debitis quae cupiditate aperiam.
                Aperiam mollitia inventore ut in, unde fuga quas deleniti velit
                sit ad recusandae, aliquam temporibus incidunt eligendi
                quisquam? Excepturi quisquam pariatur, enim aspernatur provident
                sequi doloremque incidunt quibusdam fugit similique qui
                perspiciatis sapiente, eius saepe, eaque nam assumenda voluptas?
                Odio est saepe, excepturi repellat numquam debitis? Labore
                officia culpa explicabo amet a aliquam ad beatae quia
                consequatur, suscipit fugit, quos nulla dolorem placeat enim
                similique debitis veniam iure animi? Magni magnam, provident at
                ad non inventore molestias enim eaque itaque quia perferendis
                veniam odit iusto nemo est ab ipsum repellendus officia atque,
                recusandae mollitia reprehenderit quod veritatis. Aspernatur
                exercitationem blanditiis dolore sed enim et eveniet voluptatum
                porro velit, commodi libero ipsam minus consequatur! Distinctio,
                nobis! Facilis alias excepturi sunt veniam fugiat recusandae
                dicta repellendus hic, accusamus voluptas eius eaque quo aut
                earum vitae, dignissimos blanditiis rem! Quidem, repellendus
                eveniet, maxime animi earum natus expedita fuga perspiciatis qui
                id fugit molestiae. Excepturi reprehenderit necessitatibus
                voluptatum quisquam eos ducimus placeat? Magni aliquid amet nemo
                eligendi in corrupti id debitis explicabo architecto neque eum
                cum velit quas, reiciendis deserunt maxime error saepe a nobis
                praesentium porro unde! Iure impedit iste quasi ratione
                exercitationem adipisci sequi dolor? Sunt earum sed, minus ut
                laboriosam adipisci! Sit quam fugiat dicta neque impedit
                aliquid, cupiditate vero molestias earum voluptatem temporibus,
                accusantium tempora eaque quia eligendi dolorum. Molestias nam
                nesciunt tempora, molestiae a et quibusdam explicabo aliquam
                debitis impedit illo vel doloremque maxime, dicta expedita sequi
                deleniti, voluptatem error sunt natus. Eum natus excepturi illum
                modi amet? Eligendi quae placeat quia!
            </p>
        </main>
    );
}
