import app from './app.js'
import conexao from './app/database/conexao.js'
const PORT = process.env.PORT || 3070

// fazer conexão com o bd=banco de dados    
conexao.connect((error) => {
    if(error) {
        console.log(error)
    } else{
        console.log('Conexão realizada com sucesso')
    }
})     
    //  escutar a porta
    app.listen(PORT,()=>{
        console.log(`servidor rodando em https://localhost:${PORT}`)
    })