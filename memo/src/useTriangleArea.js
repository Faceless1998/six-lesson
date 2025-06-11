import { useMemo } from "react";

const useTriangleArea = ({base, height}) => {
    const area = useMemo(() => {
        if(base && height){
            return 0.5 * base * height;
        }
    }, [base, height]);

  return area
}
export default useTriangleArea;