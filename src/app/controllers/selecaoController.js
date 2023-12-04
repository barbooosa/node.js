import selecaoRepository from "../repositories/selecaoRepository.js"
class selecaocontroller {

    async index(req, res) {
        const row = await selecaoRepository.findALL()
        res.json(row)
    }

            
        

    async show(req, res)  {   
        const id = req.params.id
        const row = await selecaoRepository.findById(id)
        res.json(row)
    }

    async store(req,res)  {
        const selecao = req.body
            const row = await selecaoRepository.create(selecao)
            res.json(row)
    }
       
    async update(req,res) {
        const id = req.params.id
        const selecao = req.body
        const row = await selecaoRepository.update(selecao, id)
        res.json(row)
    }   

    async delete(req,res) {
        
    }
}
        //padrao singleton
export default new selecaocontroller()