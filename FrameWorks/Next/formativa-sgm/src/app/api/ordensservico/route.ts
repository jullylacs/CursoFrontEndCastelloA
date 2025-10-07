//rotas que não precisam de ID ( GET / POST)

import { createOrdemServico, getOrdemServicos } from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";


// http -> request
export async function GET(){
    try {
        const data = await getOrdemServicos(); //busca todos os dados da coleção
        return NextResponse.json({success:true, data:data});
    } catch (error) {
        return NextResponse.json({success:false, error: String(error)});
    }
}

export async function POST(req: NextRequest) {//passa os dados do HTML
    try {
        const data = await req.json(); //convert o req em json
        const novoOrdemServiço = await createOrdemServico(data);//faz a solicitação http
        return NextResponse.json({success:true, data: novoOrdemServiço});//retorna os dados apos inserir OrdemServiço no banco
    } catch (error) {
        //retrona o erro, se der erro
        return NextResponse.json({ success: false, error: String(error) });
    }

}