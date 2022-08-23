import type { NextPage } from "next";
import { Hero } from "../components/Hero";
import { NavButtons } from "../components/NavButtons";
import { Navbar } from "../components/Navbar";
import { PersonCard } from "../components/PersonCard";
import { Person } from "../interfaces/Perons";
import { Section } from "../components/Section";
import { MainInfo } from "../components/MainInfo";

const Home: NextPage = () => {
  const person: Person = {
    name: "Nombre de prueba",
    email: "emaildeprueba@gamil.com",
    field: "Campo de estudios de prueba",
  };

  return (
    <>
      <Navbar />
      <Hero img="/hero-image.jpg"></Hero>
      <NavButtons />
      <MainInfo />
      <Section title="Personas">
        <div className=" flex flex-wrap items-center justify-center gap-8 p-6">
          <PersonCard person={person} />
          <PersonCard person={person} />
          <PersonCard person={person} />
          <PersonCard person={person} />
          <PersonCard person={person} />
        </div>
      </Section>{" "}
      <Section title="Lorem ipsum dolor sit amet">
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          nam tenetur porro, facere nihil labore beatae amet ipsum quae
          obcaecati animi consectetur cupiditate doloremque, mollitia qui cum
          facilis sequi expedita quo in reiciendis suscipit. Nihil iure
          distinctio id non sapiente quaerat explicabo architecto laboriosam,
          sit odit magni mollitia aspernatur enim facere, ratione placeat, quam
          incidunt vitae repudiandae corporis earum vero culpa iste. Nihil
          pariatur adipisci odit beatae natus eligendi doloremque sint ducimus
          error eaque excepturi assumenda, numquam, quo, quidem eos. Temporibus
          quos unde et non nemo doloremque, nostrum corrupti odio repudiandae
          quo fugiat, voluptas animi dicta laboriosam consequuntur quaerat
          accusamus aperiam eius quibusdam. Minima assumenda, id ipsa fuga
          libero dolores. Hic sapiente at iusto nemo, odit alias. Voluptate at,
          mollitia, consequatur quaerat soluta et a quis dolores ab voluptatum
          aut, facere rem cumque vitae inventore. Asperiores distinctio,
          inventore cupiditate nemo, dolorum quos ratione, maxime vitae est enim
          consequatur quas labore culpa qui assumenda quod error atque
          voluptate! Tempora repudiandae minima quasi id. Autem possimus,
          delectus cumque, ad tempora repudiandae amet quis temporibus eligendi
          itaque nobis sint voluptatum iste eos dolores. Molestias suscipit
          possimus qui quaerat alias reiciendis nesciunt explicabo itaque
          quibusdam unde cum expedita earum nisi dignissimos excepturi
          consequatur id enim, pariatur sequi? Possimus eligendi nostrum alias,
          cum vero reiciendis odio officia culpa iusto tempore sapiente corrupti
          dicta tenetur aspernatur dolores nihil nisi ad aliquid voluptas maxime
          voluptate ex! Perspiciatis tempore aut distinctio nostrum quo sit!
          Ducimus assumenda praesentium est quidem sunt, autem iusto atque sed
          minima velit! Blanditiis illum nihil nisi odit adipisci impedit
          tempora deleniti, architecto delectus consectetur atque harum
          voluptates repellendus quisquam, sequi distinctio, aliquam neque. Illo
          id, voluptates voluptatem sequi iste assumenda atque placeat inventore
          dignissimos corporis suscipit hic voluptas excepturi quis iure aperiam
          rem fuga perferendis accusantium laborum sint vel a amet! Ad aliquam
          ipsum blanditiis, ratione soluta molestiae? Minus odit accusantium
          earum nemo quia, corrupti culpa nihil rerum necessitatibus, non,
          sapiente a voluptatibus quod? Eius error eum nesciunt hic officia,
          nemo pariatur praesentium incidunt alias iusto deleniti impedit quod
          vero temporibus quae expedita fugit, placeat quos! Debitis eaque
          consequuntur quaerat, dicta magni modi totam sapiente illum, ipsa
          corporis accusamus ex laboriosam harum! Officiis iste laboriosam,
          provident commodi aspernatur incidunt temporibus id! Modi, sit harum.
          Soluta quas blanditiis quo repellendus sit. Tenetur amet dolorem
          doloribus architecto unde. Consectetur mollitia libero ducimus! Veniam
          rerum magni neque aut eligendi, dolor iusto unde obcaecati, iste
          labore, ex eaque nostrum ratione voluptatibus ea facilis vel! Totam
          non amet similique distinctio necessitatibus tempore quas
          reprehenderit obcaecati doloremque id error officiis deserunt
          architecto sint perferendis nobis omnis voluptatibus excepturi modi
          facere, quod quasi quis. Excepturi fugit ut incidunt velit ad nostrum,
          dolore quae nihil culpa sequi facere esse corrupti omnis tempora
          temporibus distinctio quas laborum pariatur quo? Earum minima nihil
          sequi dolore eum cumque expedita quos, aliquid ipsam? Nihil ad quos
          sint unde quia? Ut enim voluptatum maxime explicabo praesentium rem
          quaerat perspiciatis itaque debitis ratione officiis deleniti fugit
          nobis, odio placeat unde tempore atque. Sed corrupti fugit nostrum
          pariatur eos.
        </>
      </Section>
    </>
  );
};

export default Home;
