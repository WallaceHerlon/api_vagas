const axios = require("axios")
const cheerio = require("cheerio")

async function getVagas() {
    let response = await axios.get("https://startec-api-production.up.railway.app/v2/jobs/list/all")
    let vagas = response.data;

    var vaga = vagas.jobs.map((vaga) => {

        return {
            title: vaga.title,
            company: vaga.companyName,
            locate: vaga.workModel,
            requirements: vaga.jobSkills,
            postedAt: vaga.created_at,
            logo: vaga.companyLogo
        }
    })

    console.log(vaga)
}
    getVagas()

/* 
[{ 
    "title": "titulo_da_vaga_aqui",
    "company": "nome_empresa",
    "locale": "local_de_trabalha_exemplo_remoto_ou_são_paulo",
    "requirements: [ "tecnologias_necessárias", "node.js", "javascript", "outras_tecnologias" ],
    "postedAt": "data_postagem_vaga",
    "platform": "startecjobs",
    "logo": "link_imagem_logo_empresa"
    }]
*/
