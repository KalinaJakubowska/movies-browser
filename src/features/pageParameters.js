import { useHistory, useLocation } from "react-router-dom";

export const usePageParameter = paramName => {
    const location = useLocation();

    return (new URLSearchParams(location.search)).get(paramName);
};

export const useReplacePageParameters = () => {
    const history = useHistory();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);

    const replacePageParameters = (parameters) => {
        parameters.forEach(({ key, value }) => {
            if (value === "") {
                searchParams.delete(key);
            } else {
                searchParams.set(key, value);
            }
        });

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return replacePageParameters;
};