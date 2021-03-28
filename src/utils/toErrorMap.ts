import { FieldError } from "../generated/graphql";

export const toErrorMap = (erros: FieldError[]) => {
    const errorMap: Record<string, string > = {};
    erros.forEach(({ field, message }) => {
        errorMap[field] = message;
    });
    return errorMap
}