import { useState } from "react";
import "./App.css";
import { motion, useScroll } from "motion/react";
function App() {
  const [count, setCount] = useState();
  const scroll = useScroll().scrollYProgress;
  console.log(scroll);
  return (
    <>
      <motion.div
        style={{
          scaleX: scroll,
        }}
        className="w-full h-2 bg-red-800 fixed top-0 origin-center"
      ></motion.div>
      <div className="mt-9 font-mono text-center">
        <h1 className="text-2xl mb-4 mt-2 font-bold">
          This is a Story of Lorem
        </h1>
        <p className="w-2/4 text-center justify-self-center text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad non nobis
          at maiores consectetur temporibus explicabo odio corporis?
          Praesentium, cupiditate magnam natus, rem voluptas aspernatur minima
          in recusandae, amet id qui consequuntur dolorem consequatur alias
          nostrum sed dolorum! Consequatur, accusantium. Ipsam quia ad
          laudantium sint, vitae inventore exercitationem dolor! Tenetur facere
          exercitationem iure quas nobis ipsum laboriosam quis hic. Labore
          inventore ullam molestiae nemo eaque molestias rerum, animi voluptates
          quaerat. Fugiat commodi aliquid quisquam esse neque dolorem eveniet
          eaque, vitae itaque explicabo? Voluptatibus incidunt recusandae
          possimus architecto temporibus omnis, unde, dignissimos magnam
          deleniti fugiat accusamus quae cupiditate non autem, expedita eveniet
          esse labore? Illum voluptatibus fugit, accusamus, voluptate maiores
          reprehenderit ad quo quas doloribus tempora possimus odio veritatis
          eveniet vero tempore ipsa veniam iusto ratione ipsam minus in repellat
          numquam nisi. Aut, dignissimos modi cupiditate, repellendus nam
          voluptatum, maxime mollitia iusto nostrum eum libero. <br /> <br />
          Delectus, dicta minus ex voluptas autem cupiditate mollitia neque
          consequatur qui quisquam, corporis obcaecati perspiciatis voluptatibus
          expedita placeat dignissimos magnam. Nesciunt accusamus, nam maiores
          expedita commodi saepe tempora officia deserunt eius! Blanditiis
          provident accusantium quod tenetur similique sint ut, nulla porro
          laudantium recusandae ipsa, quos eius vero modi. Quis velit, suscipit
          odit commodi quae placeat voluptatum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Placeat distinctio eveniet voluptas
          blanditiis mollitia, nostrum, commodi aspernatur esse ad veritatis
          dolor facere fugiat eum illum expedita dicta voluptatum labore enim
          earum autem, voluptates cumque. Debitis quae voluptates animi tempore,
          blanditiis recusandae minus sunt dignissimos obcaecati, facere dicta
          est ullam voluptatibus, nulla consequuntur ab. Inventore veritatis
          iste laborum, provident tempora laboriosam non sunt at voluptas saepe
          quo autem, illo maiores temporibus ab possimus doloremque. <br />{" "}
          <br />
          Sit libero beatae necessitatibus unde esse tempora facere molestiae
          nihil rerum, explicabo inventore illo voluptatem sed a temporibus
          sapiente modi adipisci. Molestias cumque rem non perferendis impedit
          eum maxime, autem, nulla aperiam commodi corrupti saepe accusamus
          sequi, fugit enim exercitationem explicabo! Neque voluptatum nobis
          consequuntur maxime eum accusantium, veritatis error tenetur, quasi
          magnam sapiente. Possimus aliquam labore quas. Possimus, ducimus
          maxime dicta nam commodi reiciendis culpa autem reprehenderit quae
          debitis facere dolorum qui minima eius mollitia quo quam, delectus
          doloremque distinctio in modi! Voluptatem, inventore error odit
          molestias quis a consectetur nihil natus consequatur quisquam quos
          animi impedit officiis adipisci sequi ipsam culpa explicabo, qui,
          voluptate nam vel recusandae iure praesentium repellendus. Maxime
          eveniet est assumenda odit. Modi, quos nulla cum odio minima
          voluptates rem tempore maxime. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ab doloremque nisi voluptates iure facilis illum id!
          Ab ex, corrupti aut vel maxime id a nam ullam at, explicabo, dicta
          neque porro nesciunt dolore. Ipsam autem debitis voluptates quas, in
          architecto hic reiciendis cumque, nam sit maxime quo soluta assumenda
          eligendi odit facilis dolores eius delectus vitae consequuntur velit
          perspiciatis! Ab minima porro iure deserunt, perferendis veritatis
          doloribus distinctio esse commodi aperiam saepe voluptatibus omnis
          alias labore, harum maxime hic, itaque sequi doloremque obcaecati.
          Tempore praesentium iste hic. Eos laborum, quasi mollitia dolor
          ratione magni, consequuntur deserunt culpa itaque suscipit, ex ad.
          Accusantium cum reprehenderit omnis dolore, quibusdam architecto eos
          saepe sed amet recusandae dolor distinctio quidem, a nesciunt autem,
          ullam adipisci officiis. Reiciendis ad quidem sint explicabo
          accusantium aut, sequi nemo impedit quod est alias ipsa pariatur
          accusamus optio aliquam laudantium magni, recusandae sed possimus, a
          sunt quis obcaecati itaque. Ad, quasi. Tenetur id exercitationem porro
          perferendis illum veniam sint minus aperiam dolor ex natus eligendi
          nostrum eaque quaerat voluptate voluptatibus repudiandae laudantium
          ipsum, eos amet quia autem dignissimos ut! Quod tempora minima
          blanditiis error earum, qui repellat expedita aut soluta animi fugiat
          maxime! Nam eum iste eius libero accusamus. <br /> <br /> Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Harum debitis nostrum
          aspernatur vel consectetur in voluptatem aliquam recusandae vitae
          alias tempore quo a, sunt hic soluta laboriosam deleniti possimus.
          Cumque consectetur labore debitis rerum deleniti ducimus neque
          expedita odio nisi perferendis? Atque quidem necessitatibus optio est,
          numquam iusto nobis dolore rem possimus voluptatibus, omnis vel,
          veritatis maiores quibusdam quo accusamus praesentium. Ducimus quae
          aliquid harum fugit, cum sunt veritatis expedita perferendis
          doloremque nesciunt repudiandae eius blanditiis adipisci, quisquam
          temporibus corporis veniam quasi modi reprehenderit. Perspiciatis et
          tempore facere. Soluta similique fugiat pariatur minima doloribus
          ipsam vitae asperiores officiis ea. Dolorum est sit inventore dolores
          animi nisi porro minima id perferendis ullam! In magni numquam,
          voluptates at quaerat quia necessitatibus dicta. Tempore, consectetur
          laudantium, perferendis illo aspernatur sint iusto aut laboriosam qui
          temporibus consequatur alias, nesciunt voluptas nam? Ex asperiores
          quisquam perferendis aliquam tempora odit hic obcaecati nulla eaque
          aut veniam dicta labore eum explicabo cupiditate, suscipit, vel
          tenetur itaque! Magnam, minus <br /><br /> Perspiciatis, inventore in
          nostrum beatae omnis doloremque pariatur sunt voluptate ullam facere
          quod incidunt voluptatem maxime itaque illo repudiandae ducimus
          asperiores aliquid vel iste ut! Iste dolor culpa rerum voluptatum
          molestiae animi porro esse perferendis facilis quaerat, quo numquam
          consequatur vitae et necessitatibus deleniti ducimus facere quidem
          voluptatem fugiat nobis dolorem molestias itaque? Quae, nostrum ex
          nemo asperiores quisquam dignissimos, enim quo quasi dolore cumque ea
          voluptas laboriosam explicabo ab quaerat harum, molestiae minima earum
          quas. Fugiat omnis dignissimos libero inventore enim laboriosam
          perferendis iste vitae quod. <br /><br /><br />Provident in eligendi amet. Provident
          eius debitis asperiores dolorum iste id impedit possimus harum
          similique fugit, vel sapiente. Nihil sit natus quam, commodi
          distinctio explicabo atque vitae porro unde ad quae officiis! Quia
          modi dolore ipsum saepe minus, consectetur hic voluptas laboriosam
          deleniti facilis. Quia dignissimos repudiandae sequi ea quo nesciunt
          animi illum explicabo architecto eum omnis rerum, fuga quam facilis
          qui, nam adipisci repellat minima ipsa accusamus? Accusamus deleniti
          ullam ad velit fugiat sapiente magni vel natus libero, optio molestias
          iusto ab temporibus voluptas error incidunt placeat eligendi odit
          nihil obcaecati qui alias quibusdam! Minus at reprehenderit nostrum
          officia, repellendus omnis amet quisquam minima laudantium aperiam
          eius dolores cupiditate. Unde laudantium deleniti libero reiciendis,
          hic voluptatibus ratione ea, consectetur, nesciunt laborum temporibus
          mollitia error aspernatur! Tempora, optio quisquam. Itaque illum,
          corporis consequuntur repellat sed iste totam alias minima molestiae
          rerum officia debitis pariatur doloremque aspernatur? Placeat voluptas
          molestiae, pariatur id soluta delectus neque sed voluptatibus maxime
          culpa, voluptates nam at excepturi vitae deserunt totam, corporis vero
          blanditiis. Omnis, accusamus animi delectus dignissimos suscipit modi
          deserunt facere, mollitia nostrum sunt iusto nam voluptatem?
          Dignissimos, quaerat itaque nisi quod ullam fugiat, corporis
          voluptatum asperiores nulla vitae fuga optio consectetur placeat
          quisquam. Tempora nobis molestias, quod minima, aperiam quas omnis
          enim vitae, quam totam mollitia eaque? Aliquam obcaecati velit
          possimus magni ea sapiente. Quod esse dolorem iste dolore assumenda
          nostrum eius a ea eum corrupti officia ipsam aspernatur, quasi aliquam
          voluptatem ut fuga suscipit provident minus exercitationem mollitia ab
          quam. Aperiam, nobis sit!
        </p>
      </div>
    </>
  );
}

export default App;
