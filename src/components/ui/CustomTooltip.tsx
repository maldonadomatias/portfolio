import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

interface Props {
  title: string;
  children: JSX.Element;
  placement?:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start"
    | undefined;
}

const BasicTootltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "var(--foreground-color)",
    color: "var(--background-color)",
    fontFamily: "Manrope, sans-serif !important",
    boxShadow: theme.shadows[1],
    fontSize: 10,
    padding: 6,
    top: "5px",
    position: "relative",
    fontWeight: 600,
  },
}));

export default function CustomTooltip({ title, children, placement }: Props) {
  return (
    <BasicTootltip title={title} placement={placement ? placement : "top"}>
      {children}
    </BasicTootltip>
  );
}
