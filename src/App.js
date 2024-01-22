import { AppBar, Container, Grid, Toolbar } from "@mui/material";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import CCsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 27 }}>Kart Projesi</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Angular}
              title="Angular"
              description="Angular, dinamik bir web uygulaması geliştirmek için istemci tarafında çalışır. Bu özelliği sayesinde, HTML'i bir şablon dili olarak belirler ve HTML etiketlerini uygulamanın bileşenlerini temsil edecek şekilde genişletmeye olanak tanır."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Bootstrap}
              title="Bootstrap"
              description="Temel amacı web uygulamalarının hızlı, kullanışlı ve daha duyarlı hale getirilmesini kolaylaştırmaktır. Bootstrap günümüzde duyarlı ve mobil öncelikli web siteleri geliştirmek için en popüler CSS iskeleti olma unvanına sahiptir."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Course
              image={CCsharp}
              title="CCsharp"
              description="C, işletim sistemlerinin ve gömülü sistem uygulamalarının uygulanmasında sistem programlaması için yaygın olarak kullanılmaktadır. C# modern, nesne odaklı ve türe uygun bir programlama dilidir.."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Course
              image={KompleWeb}
              title="KompleWeb"
              description="İstemci ve sunucu modeli kullanılarak World Wide Web uygulamalarının geliştirilmesine yardımcı olur. Front-End, Back-End ve Full Stack alanlarında uzmanlaşan kişiler, farklı programlama dillerine hakimdir. Güncel teknolojik gelişmeleri takip edip öğrendiklerini alanına uygular."
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
