// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 785LmUYPoUm6pacfNyEDZ9
// Component: xs87ByT3OU
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { antTable } from "@ant/DatePicker"; // plasmic-import: -uZM-JzB4m/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_ant_design_views_wih_codegen.module.css"; // plasmic-import: 785LmUYPoUm6pacfNyEDZ9/projectcss
import sty from "./PlasmicUserView.module.css"; // plasmic-import: xs87ByT3OU/css

export type PlasmicUserView__VariantMembers = {};

export type PlasmicUserView__VariantsArgs = {};
type VariantPropType = keyof PlasmicUserView__VariantsArgs;
export const PlasmicUserView__VariantProps = new Array<VariantPropType>();

export type PlasmicUserView__ArgsType = {};
type ArgPropType = keyof PlasmicUserView__ArgsType;
export const PlasmicUserView__ArgProps = new Array<ArgPropType>();

export type PlasmicUserView__OverridesType = {
  root?: p.Flex<"div">;
  antTable?: p.Flex<typeof antTable>;
};

export interface DefaultUserViewProps {
  className?: string;
}

function PlasmicUserView__RenderFunc(props: {
  variants: PlasmicUserView__VariantsArgs;
  args: PlasmicUserView__ArgsType;
  overrides: PlasmicUserView__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <antTable
        data-plasmic-name={"antTable"}
        data-plasmic-override={overrides.antTable}
        className={classNames("__wab_instance", sty.antTable)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "antTable"],
  antTable: ["antTable"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  antTable: typeof antTable;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUserView__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUserView__VariantsArgs;
    args?: PlasmicUserView__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUserView__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUserView__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicUserView__ArgProps,
          internalVariantPropNames: PlasmicUserView__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicUserView__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUserView";
  } else {
    func.displayName = `PlasmicUserView.${nodeName}`;
  }
  return func;
}

export const PlasmicUserView = Object.assign(
  // Top-level PlasmicUserView renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    antTable: makeNodeComponent("antTable"),

    // Metadata about props expected for PlasmicUserView
    internalVariantProps: PlasmicUserView__VariantProps,
    internalArgProps: PlasmicUserView__ArgProps
  }
);

export default PlasmicUserView;
/* prettier-ignore-end */
