export const metrics = {
    borderRadiusSmall: "5px",
    borderRadiusLarge: "8px",
    borderRadiusCircle: "999px",
    controlMinWidth: "120px",
}

// getters used in order to have access to the correct 'this' value
export const typeRamp = {
    fontWeightNormal: "400",
    fontWeightSemibold: "600",
    fontFamily: '"Segoe UI", "Segoe", sans-serif',
    get fontCaption() { return `${this.fontWeightNormal} 12px/16px ${this.fontFamily}` },
    get fontBody() { return `${this.fontWeightNormal} 14px/20px ${this.fontFamily}` },
    get fontBodyStrong() { return `${this.fontWeightSemibold} 14px/20px ${this.fontFamily}` },
    get fontBodyLarge() { return `${this.fontWeightNormal} 18px/24px ${this.fontFamily}` },
    get fontSubtitle() { return `${this.fontWeightSemibold} 20px/28px ${this.fontFamily}` },
    get fontTitle() { return `${this.fontWeightSemibold} 28px/36px ${this.fontFamily}` },
    get fontTitleLarge() { return `${this.fontWeightSemibold} 40px/52px ${this.fontFamily}` },
    get fontDisplay() { return `${this.fontWeightSemibold} 68px/92px ${this.fontFamily}` },
}

export const accentColorsDefault = {
    accentBase: "rgb(0, 120, 212)", // 0078d4
    accentLight1: "rgb(0, 147, 249)", // 0093f9
    accentLight2: "rgb(96, 204, 254)", // 60ccfe
    accentLight3: "rgb(152, 236, 254)", // 98ecfe
    accentLight2_90: "rgba(96, 204, 254, 0.9)", 
    accentLight2_80: "rgba(96, 204, 254, 0.8)", 
    accentDark1: "rgb(0, 94, 183)", // 005eb7
    accentDark2: "rgb(0, 61, 146)", // 003d92
    accentDark3: "rgb(0, 25, 104)", // 001968
    accentDark1_90: "rgba(0, 94, 183, 0.9)",
    accentDark1_80: "rgba(0, 94, 183, 0.8)",
}

export const lightValues = {
    TextFillColorPrimary: "rgba(0, 0, 0, 0.8956)",
    TextFillColorSecondary: "rgba(0, 0, 0, 0.6186)",
    TextFillColorTertiary: "rgba(0, 0, 0, 0.4458)",
    TextFillColorDisabled: "rgba(0, 0, 0, 0.3614)",
    TextFillColorInverse: "rgba(255, 255, 255, 1)",
    
    AccentTextFillColorPrimary: accentColorsDefault.accentDark2,
    AccentTextFillColorSecondary: accentColorsDefault.accentDark3,
    AccentTextFillColorTertiary: accentColorsDefault.accentDark1,
    AccentTextFillColorDisabled: "rgba(0, 0, 0, 0.3614)",
    
    TextOnAccentFillColorSelectedText: "rgba(255, 255, 255, 1)",
    TextOnAccentFillColorPrimary: "rgba(255, 255, 255, 1)",
    TextOnAccentFillColorSecondary: "rgba(255, 255, 255, 0.7)",
    TextOnAccentFillColorDisabled: "rgba(255, 255, 255, 1)",
    
    ControlFillColorDefault: "rgba(255, 255, 255, 0.7)",
    ControlFillColorSecondary: "rgba(249, 249, 249, 0.5)",
    ControlFillColorTertiary: "rgba(249, 249, 249, 0.3)",
    ControlFillColorDisabled: "rgba(249, 249, 249, 0.3)",
    ControlFillColorTransparent: "rgba(255, 255, 255, 0)",
    ControlFillColorInputActive: "rgba(255, 255, 255, 1)",
    
    ControlStrongFillColorDefault: "rgba(0, 0, 0, 0.4458)",
    ControlStrongFillColorDisabled: "rgba(0, 0, 0, 0.3173)",
    
    ControlSolidFillColorDefault: "rgba(255, 255, 255, 1)",
    
    SubtleFillColorTransparent: "rgba(255, 255, 255, 0)",
    SubtleFillColorSecondary: "rgba(0, 0, 0, 0.0353)",
    SubtleFillColorTertiary: "rgba(0, 0, 0, 0.0241)",
    SubtleFillColorDisabled: "rgba(255, 255, 255, 0)",
    
    ControlAltFillColorTransparent: "rgba(255, 255, 255, 0)",
    ControlAltFillColorSecondary: "rgba(0, 0, 0, 0.0241)",
    ControlAltFillColorTertiary: "rgba(0, 0, 0, 0.0578)",
    ControlAltFillColorQuarternary: "rgba(0, 0, 0, 0.0924)",
    ControlAltFillColorDisabled: "rgba(255, 255, 255, 0)",
    
    ControlOnImageFillColorDefault: "rgba(255, 255, 255, 0.079)",
    ControlOnImageFillColorSecondary: "rgba(243, 243, 243, 1)",
    ControlOnImageFillColorTertiary: "rgba(235, 235, 235, 1)",
    ControlOnImageFillColorDisabled: "rgba(255, 255, 255, 0)",
    
    AccentFillColorDefault: accentColorsDefault.accentDark1,
    AccentFillColorSecondary: accentColorsDefault.accentDark1_90,
    AccentFillColorTertiary: accentColorsDefault.accentDark1_80,
    AccentFillColorSelectedTextBackground: accentColorsDefault.accentBase,
    AccentFillColorDisabled: "rgba(0, 0, 0, 0.2169)",
    
    ControlStrokeColorDefault: "rgba(0, 0, 0, 0.0578)",
    ControlStrokeColorSecondary: "rgba(0, 0, 0, 0.1622)",
    ControlStrokeColorOnAccentDefault: "rgba(255, 255, 255, 0.08)",
    ControlStrokeColorOnAccentSecondary: "rgba(0, 0, 0, 0.4)",
    ControlStrokeColorOnAccentTertiary: "rgba(0, 0, 0, 0.2169)",
    ControlStrokeColorOnAccentDisabled: "rgba(0, 0, 0, 0.0578)",
    
    ControlStrokeColorForStrongFillWhenOnImage: "rgba(255, 255, 255, 0.35)",
    
    CardStrokeColorDefault: "rgba(0, 0, 0, 0.0578)",
    CardStrokeColorDefaultSolid: "rgba(235, 235, 235, 1)",
    
    ControlStrongStrokeColorDefault: "rgba(0, 0, 0, 0.4458)",
    ControlStrongStrokeColorDisabled: "rgba(0, 0, 0, 0.2169)",
    
    get ControlElevationBorder() { return `${this.ControlStrokeColorDefault} ${this.ControlStrokeColorDefault} ${this.ControlStrokeColorSecondary}` },
    get CircleElevationBorder() { return `${this.ControlStrokeColorDefault} ${this.ControlStrokeColorDefault} ${this.ControlStrokeColorSecondary}` },
    get TextControlElevationBorder() { return `${this.ControlStrokeColorDefault} ${this.ControlStrokeColorDefault} ${this.ControlStrongStrokeColorDefault}` },
    get TextControlElevationBorderFocused() { return `${this.ControlStrokeColorDefault} ${this.ControlStrokeColorDefault} ${this.AccentFillColorDefault}` },
    get AccentControlElevationBorder() { return `${this.ControlStrokeColorOnAccentDefault} ${this.ControlStrokeColorOnAccentDefault} ${this.ControlStrokeColorOnAccentSecondary}` },
    
    SurfaceStrokeColorDefault: "rgba(117, 117, 117, 0.4)",
    SurfaceStrokeColorFlyout: "rgba(0, 0, 0, 0.0578)",
    SurfaceStrokeColorInverse: "rgba(255, 255, 255, 0.0824)",
    
    DividerStrokeColorDefault: "rgba(0, 0, 0, 0.0578)",
    
    FocusStrokeColorOuter: "rgba(0, 0, 0, 0.8956)",
    FocusStrokeColorInner: "rgba(255, 255, 255, 0.7)",
    
    CardBackgroundFillColorDefault: "rgba(255, 255, 255, 0.7)",
    CardBackgroundFillColorSecondary: "rgba(246, 246, 246, 0.5)",
    
    SmokeFillColorDefault: "rgba(0, 0, 0, 0.3)",
    
    LayerFillColorDefault: "rgba(255, 255, 255, 0.5)",
    LayerFillColorAlt: "rgba(255, 255, 255, 1)",
    LayerOnAcrylicFillColorDefault: "rgba(255, 255, 255, 0.25)",
    LayerOnAccentAcrylicFillColorDefault: "rgba(255, 255, 255, 0.25)",
    
    SolidBackgroundFillColorBase: "#F3F3F3",
    SolidBackgroundFillColorSecondary: "#EEEEEE",
    SolidBackgroundFillColorTertiary: "#F9F9F9",
    SolidBackgroundFillColorQuarternary: "#FFFFFF",
    SolidBackgroundFillColorTransparent: "rgba(243, 243, 243, 0)",
    
    SystemFillColorSuccess: "#0F7B0F",
    SystemFillColorCaution: "#9D5D00",
    SystemFillColorCritical: "#C42B1C",
    SystemFillColorNeutral: "rgba(0, 0, 0, 0.4458)",
    SystemFillColorSolidNeutral: "#8A8A8A",
    SystemFillColorAttentionBackground: "rgba(246, 246, 246, 0.5)",
    SystemFillColorSuccessBackground: "#DFF6DD",
    SystemFillColorCautionBackground: "#FFF4CE",
    SystemFillColorCriticalBackground: "#FDE7E9",
    SystemFillColorNeutralBackground: "rgba(0, 0, 0, 0.0241)",
    SystemFillColorSolidAttentionBackground: "#F7F7F7",
    SystemFillColorSolidNeutralBackground: "#F3F3F3",
}

export const darkValues = {
    TextFillColorPrimary: "rgba(255, 255, 255, 1)",
    TextFillColorSecondary: "rgba(255, 255, 255, 0.786)",
    TextFillColorTertiary: "rgba(255, 255, 255, 0.5442)",
    TextFillColorDisabled: "rgba(255, 255, 255, 0.3628)",
    TextFillColorInverse: "rgba(0, 0, 0, 0.8956)",
    
    AccentTextFillColorPrimary: accentColorsDefault.accentLight3,
    AccentTextFillColorSecondary: accentColorsDefault.accentLight3,
    AccentTextFillColorTertiary: accentColorsDefault.accentLight2,
    AccentTextFillColorDisabled: "rgba(255, 255, 255, 0.3628)",
    
    TextOnAccentFillColorSelectedText: "rgba(255, 255, 255, 1)",
    TextOnAccentFillColorPrimary: "rgba(0, 0, 0, 1)",
    TextOnAccentFillColorSecondary: "rgba(0, 0, 0, 0.5)",
    TextOnAccentFillColorDisabled: "rgba(255, 255, 255, 0.5302)",
    
    ControlFillColorDefault: "rgba(255, 255, 255, 0.0605)",
    ControlFillColorSecondary: "rgba(255, 255, 255, 0.0837)",
    ControlFillColorTertiary: "rgba(255, 255, 255, 0.0419)",
    ControlFillColorDisabled: "rgba(255, 255, 255, 0.3)",
    ControlFillColorTransparent: "rgba(255, 255, 255, 0)",
    ControlFillColorInputActive: "rgba(30, 30, 30, 0.7)",
    
    ControlStrongFillColorDefault: "rgba(255, 255, 255, 0.5442)",
    ControlStrongFillColorDisabled: "rgba(255, 255, 255, 0.2465)",
    
    ControlSolidFillColorDefault: "rgba(69, 69, 69, 1)",
    
    SubtleFillColorTransparent: "rgba(255, 255, 255, 0)",
    SubtleFillColorSecondary: "rgba(255, 255, 255, 0.0605)",
    SubtleFillColorTertiary: "rgba(255, 255, 255, 0.0419)",
    SubtleFillColorDisabled: "rgba(255, 255, 255, 0)",
    
    ControlAltFillColorTransparent: "rgba(255, 255, 255, 0)",
    ControlAltFillColorSecondary: "rgba(0, 0, 0, 0.1)",
    ControlAltFillColorTertiary: "rgba(255, 255, 255, 0.0419)",
    ControlAltFillColorQuarternary: "rgba(255, 255, 255, 0.0698)",
    ControlAltFillColorDisabled: "rgba(255, 255, 255, 0)",
    
    ControlOnImageFillColorDefault: "rgba(28, 28, 28, 0.7)",
    ControlOnImageFillColorSecondary: "rgba(26, 26, 26, 1)",
    ControlOnImageFillColorTertiary: "rgba(19, 19, 19, 1)",
    ControlOnImageFillColorDisabled: "rgba(30, 30, 30, 1)",
    
    AccentFillColorDefault: accentColorsDefault.accentLight2,
    AccentFillColorSecondary: accentColorsDefault.accentLight2_90,
    AccentFillColorTertiary: accentColorsDefault.accentLight2_80,
    AccentFillColorSelectedTextBackground: accentColorsDefault.accentBase,
    AccentFillColorDisabled: "rgba(255, 255, 255, 0.1581)",
    
    ControlStrokeColorDefault: "rgba(255, 255, 255, 0.0698)",
    ControlStrokeColorSecondary: "rgba(255, 255, 255, 0.093)",
    ControlStrokeColorOnAccentDefault: "rgba(255, 255, 255, 0.08)",
    ControlStrokeColorOnAccentSecondary: "rgba(0, 0, 0, 0.14)",
    ControlStrokeColorOnAccentTertiary: "rgba(0, 0, 0, 0.2169)",
    ControlStrokeColorOnAccentDisabled: "rgba(0, 0, 0, 0.2)",
    
    ControlStrokeColorForStrongFillWhenOnImage: "rgba(0, 0, 0, 0.42)",
    
    CardStrokeColorDefault: "rgba(0, 0, 0, 0.1)",
    CardStrokeColorDefaultSolid: "rgba(28, 28, 28, 1)",
    
    ControlStrongStrokeColorDefault: "rgba(255, 255, 255, 0.5442)",
    ControlStrongStrokeColorDisabled: "rgba(255, 255, 255, 0.1581)",
    
    get ControlElevationBorder() { return `${this.ControlStrokeColorDefault} ${this.ControlStrokeColorDefault} ${this.ControlStrokeColorSecondary}` },
    get CircleElevationBorder() { return `${this.ControlStrokeColorDefault} ${this.ControlStrokeColorDefault} ${this.ControlStrokeColorSecondary}` },
    get TextControlElevationBorder() { return `${this.ControlStrokeColorDefault} ${this.ControlStrokeColorDefault} ${this.ControlStrongStrokeColorDefault}` },
    get TextControlElevationBorderFocused() { return `${this.ControlStrokeColorDefault} ${this.ControlStrokeColorDefault} ${this.AccentFillColorDefault}` },
    get AccentControlElevationBorder() { return `${this.ControlStrokeColorOnAccentDefault} ${this.ControlStrokeColorOnAccentDefault} ${this.ControlStrokeColorOnAccentSecondary}` },
    
    SurfaceStrokeColorDefault: "rgba(117, 117, 117, 0.4)",
    SurfaceStrokeColorFlyout: "rgba(0, 0, 0, 0.2)",
    SurfaceStrokeColorInverse: "rgba(0, 0, 0, 0.0578)",
    
    DividerStrokeColorDefault: "rgba(255, 255, 255, 0.0837)",
    
    FocusStrokeColorOuter: "rgba(255, 255, 255, 1)",
    FocusStrokeColorInner: "rgba(0, 0, 0, 0.7)",
    
    CardBackgroundFillColorDefault: "rgba(255, 255, 255, 0.0512)",
    CardBackgroundFillColorSecondary: "rgba(255, 255, 255, 0.0326)",
    
    SmokeFillColorDefault: "rgba(0, 0, 0, 0.3)",
    
    LayerFillColorDefault: "rgba(58, 58, 58, 0.3)",
    LayerFillColorAlt: "rgba(255, 255, 255, 0.0538)",
    LayerOnAcrylicFillColorDefault: "rgba(255, 255, 255, 0.0359)",
    LayerOnAccentAcrylicFillColorDefault: "rgba(255, 255, 255, 0.0359)",
    
    SolidBackgroundFillColorBase: "#202020",
    SolidBackgroundFillColorSecondary: "#1C1C1C",
    SolidBackgroundFillColorTertiary: "#282828",
    SolidBackgroundFillColorQuarternary: "#2C2C2C",
    SolidBackgroundFillColorTransparent: "rgba(32, 32, 32, 0)",
    
    SystemFillColorSuccess: "#6CCB5F",
    SystemFillColorCaution: "#FCE100",
    SystemFillColorCritical: "#FF99A4",
    SystemFillColorNeutral: "rgba(255, 255, 255, 0.5442)",
    SystemFillColorSolidNeutral: "#9D9D9D",
    SystemFillColorAttentionBackground: "rgba(255, 255, 255, 0.0326)",
    SystemFillColorSuccessBackground: "#393D1B",
    SystemFillColorCautionBackground: "#433519",
    SystemFillColorCriticalBackground: "#442726",
    SystemFillColorNeutralBackground: "rgba(255, 255, 255, 0.0326)",
    SystemFillColorSolidAttentionBackground: "#2E2E2E",
    SystemFillColorSolidNeutralBackground: "#2E2E2E",
}