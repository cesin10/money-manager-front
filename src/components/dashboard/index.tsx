
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";

export function InsertActivityForm() {
    return (
        <div className="flex space-x-2 p-8">
            <Input type="date" className="max-w-[10rem]" />
            <Input type="text" placeholder="Insira da descrição da atividade... " />
            <Input type="number" placeholder="Digite o valor..." />
            <Select>
                <SelectTrigger className="w-80">
                    <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="0">Entrada</SelectItem>
                    <SelectItem value="1">Saída</SelectItem>

                </SelectContent>
            </Select>

            <Button>Incluir</Button>

        </div>
    )
}