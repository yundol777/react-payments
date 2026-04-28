import NumberInput from "../NumberInput/NumberInput";

interface Props {
  value: string;
  setValue: (value: string)=>void;
}

export default function CvcSection({value, setValue}: Props) {
    return(
        <div>
            <div>
                <h1>CVC 번호를 입력해주세요</h1>
            </div>
            <div>
                <label>
                    CVC
                </label>
                <div>
                    <NumberInput value={value} setValue={setValue} placeholder="123" maxLength={3} />
                </div>
                <p>숫자만 입력 가능합니다.</p>
            </div>
        </div>
    );
}