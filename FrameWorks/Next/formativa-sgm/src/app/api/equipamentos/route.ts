//rotas que não precisam de ID ( GET / POST)

import { createEquipamento, getEquipamentos } from "@/controllers/EquipamentoController";
import { NextRequest, NextResponse } from "next/server";


// http -> request
export async function GET(){
    try {
        const data = await getEquipamentos(); //busca todos os dados da coleção
        return NextResponse.json({success:true, data:data});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

export async function POST(req: NextRequest) {//passa os dados do HTML
    try {
        const data = await req.json(); //convert o req em json
        const novoEquipamento = await createEquipamento(data);//faz a solicitação http
        return NextResponse.json({success:true, data: novoEquipamento});//retorna os dados apos inserir Equipamento no banco
    } catch (error) {
        //retrona o erro, se der erro
        return NextResponse.json({ success: false, error: error });
    }

}