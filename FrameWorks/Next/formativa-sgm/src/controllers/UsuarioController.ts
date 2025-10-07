
//listar todos os Usuario

import Usuario, { IUsuario } from "@/models/Usuario";
import connectMongo from "@/services/mongodb"

//export arrow function
export const getUsuarios = async() => {
    //conectar com banco
    await connectMongo();
    //solicitação para o MongoDB
    const usuarios = await Usuario.find(); //listar todos os usuário da coleção
    return usuarios;
}
//listar um unico Usuário
export async function getUsuarioById(id:string) {
    await connectMongo();
    const usuario = await Usuario.findById(id);
    return usuario
}
//criar Usuário
export async function createUsuario(data: Partial<IUsuario>) {
    await connectMongo();
    const novoUsuario = new Usuario(data);
    const novoUsuarioId = await novoUsuario.save();
    return novoUsuarioId;
}

// Atualizaar dados Usuário
export const updateUsuario = async(id:string, data: Partial<IUsuario>)=>{
    await connectMongo();
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, data, {new:true});
    return usuarioAtualizado;
}

//Deletar Usuário
export const deleteUsuario = async (id:string)=>{
    await connectMongo();
    await Usuario.findByIdAndDelete(id);
}

//método de autenticação do usuário (login) Senha é criptografada
export const autenticaUsuario = async (email: string, senha:string) =>{
    await connectMongo();
    //buscar um usuário pelo email
    const usuario = await Usuario.find({email}).select("+senha");
    //se uduário não for encontado
    if(!usuario || usuario.length === 0) return null;
    //comparar senha
    const senhaSecreta = await usuario[0].compareSenha(senha);
    if(!senhaSecreta) return null; //senha incorreta
    //se deu certo
    return usuario[0];
}