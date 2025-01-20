import AllowanceService from "@/services/allowanceService";
import trashIcon from '@/assets/icons/trashicon.svg'
import editIcon from '@/assets/icons/editicon.svg'

export default function Table(){

    const allowancesMockArray = Array(10).fill(0)
    const allowanceService = new AllowanceService()

    return(
        <table className="text-left text-[14px] mt-[15px]">
            <thead>
                <tr>
                    <th className="pl-[10px]">ERC20 address</th><th>Owner address</th><th>Spender address</th><th>Amount (Wei)</th><th>Date</th><th className="w-[270px] text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
            {allowancesMockArray.map((allowance, index) => (
                <tr key={"tableLine" + index}>
                    <td className="pl-[15px]">0x587...a20cb</td>
                    <td>0x587...a20cb</td>
                    <td>0x587...a20cb</td>
                    <td>127.00</td>
                    <td>12/10/2024</td>
                    <td className="flex flex-row gap-x-[10px] justify-center items-center h-[50px] px-[10px]">
                        <button className="flex flex-row justify-center items-center w-1/2 h-[38px] gap-x-[8px] font-semibold bg-tablebutton-bg rounded-full border-[2px] text-offblack border-offblack hover:bg-slate-200">
                            {/*<img src={editIcon}/>*/}
                            Update
                        </button>
                        <button onClick={() => allowanceService.revokeAllowance()} className="flex flex-row justify-center items-center w-1/2 h-[38px] gap-x-[6px] font-semibold bg-tablebutton-bg rounded-full border-redtablebutton-color border-[2px] text-redtablebutton-color shadow-[0_2px_4px_#FF6A8A40,0_4px_8px_#FF6A8A40] hover:bg-red-100 hover:shadow-[0_1px_0_#FFFFFF]">
                            {/*<img src={trashIcon}/>*/}
                            Revoke
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>

        </table>
    )
}

function maskAddress(fullAddress : `x0${string}`) : `x0${string}...${string}` {
    if (!isValidAddress(fullAddress)) {
        throw new Error("Invalid address format. Address must start with 'x0' followed by 40 hexadecimal characters.");
    }
    const maskedPart = '...'
    const startVisiblePart = fullAddress.slice(0, 5) as `x0${string}`
    const endVisiblePart = fullAddress.slice(-5)
    return `${startVisiblePart}${maskedPart}${endVisiblePart}`
}

function isValidAddress(address: string): address is `x0${string}` {
    return /^x0[a-fA-F0-9]{40}$/.test(address);
}