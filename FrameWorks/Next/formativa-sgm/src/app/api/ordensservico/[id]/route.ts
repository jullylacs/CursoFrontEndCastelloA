import { deleteOrdemServico, getOrdemServicoById, updateOrdemServico } from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";

interface Parametro {
    id: string;
}

// GET One
export async function GET({ params }: { params: Parametro }) {
    try {
        const { id } = params;
        const data = await getOrdemServicoById(id);
        if (!data) {
            return NextResponse.json({ success: false, error: "Not Found" });
        }
        return NextResponse.json({ success: true, data: data });
    } catch (error) {
        return NextResponse.json({ success: false, error: error });
    }
}

// PATCH
export async function PATCH({ params }: { params: Parametro }, req: NextRequest) {
    try {
        const { id } = params;
        const data = await req.json();
        const ordemServicoAtualizada = await updateOrdemServico(id, data);
        if (!ordemServicoAtualizada) {
            return NextResponse.json({ success: false, error: "Not Found" });
        }
        return NextResponse.json({ success: true, data: ordemServicoAtualizada });
    } catch (error) {
        return NextResponse.json({ success: false, error: error });
    }
}

// DELETE
export async function DELETE({ params }: { params: Parametro }) {
    try {
        const { id } = params;
        await deleteOrdemServico(id);
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: error });
    }
}
