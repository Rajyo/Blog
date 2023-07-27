import logo from "../../assets/images/pexels-fauxels-3183165.jpg"

const About = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "rgba(169, 112, 23, 0.82)",
          color: "white",
          padding: "10px",
        }}
      >
        About
      </h1>
      <div style={{backgroundColor:"lightblue", display:"flex", flexDirection:"row"}}>

        <div>
          <img src={logo} alt="" style={{width:"39rem", padding:"2rem", margin:"0rem 1rem 0rem 5rem"}}/>
        </div>


        <div style={{ padding:"5rem", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <div style={{backgroundColor:"#ffd70096", padding:"1rem 2rem", borderRadius:"1rem", width:"75%", marginTop:"-2.5rem"}}>
              <h3 style={{marginBottom:"1rem"}}><b>About us:</b></h3>
              <p>
                Unicorn Blog is a magical place for creative souls to share their stories and inspire others. We believe everyone has a story worth telling, and we aim to provide a safe space for writers to express themselves freely.
              </p>
          </div>
          <div style={{backgroundColor:"#ffd700cf", padding:"1rem 2rem", borderRadius:"1rem", width:"75%", marginTop:"2rem"}}>
              <h3 style={{marginBottom:"1rem"}}><b>Our Story:</b></h3>
              <p>
                Unicorn Blog was created in 2020 by two friends who wanted to build a community for writers. We noticed that many bloggers felt isolated or lacked the confidence to share their work. Our goal is to change that by providing a supportive and judgement-free environment where writers of all backgrounds and experience levels can thrive.
              </p>
          </div>
          <div style={{backgroundColor:"gold", padding:"1rem 2rem", borderRadius:"1rem", width:"75%", marginTop:"2rem"}}>
            <h3 style={{marginBottom:"1.5rem"}}><b>Our Values:</b></h3>
            <ol style={{fontSize:"0.9rem"}}>
              <li><b>Inclusivity -</b> We welcome writers of all identities, perspectives and backgrounds.</li> 
              <li style={{marginTop:"0.5rem"}}> <b> Creativity -</b> We celebrate the creativity, authenticity and craft of blogging.</li>
              <li style={{marginTop:"0.5rem"}}><b>Community -</b> We aim to cultivate a community of writers who support and learn from each other.</li>
              <li style={{marginTop:"0.5rem"}}><b>Freedom -</b> Writers have the freedom to blog about whatever inspires them.</li>
              <li style={{marginTop:"0.5rem"}}><b>Growth -</b> We hope to help writers hone their craft, find their voice and grow their readership</li>
            </ol>
          </div>
        </div>

      </div>
    </>
  );
};
export default About;
