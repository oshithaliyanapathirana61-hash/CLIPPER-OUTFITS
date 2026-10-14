import { Product, Review, CartItem } from '../types';

export const LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1U2hJuL2vzDUJQr2DjMmmDlxOxQTxsoHTabGfrGq0G-2Pxf73_HxFQOWFJw0H3ugk-EgGQmPqMmvmOzuLWai5QVO1gr0Obt1_WQfh1VjnRC9OARS5n2_i4gRQ-Pe23JmBR-6OdyFRs-Q3IxHN-oLlVzbQDj6Be0jWu4qdpLhymmmsvoWInmU0agh0jk9AXctPDQNG3G8rSrMPmKV5yRiR5V8QikB-pY2zh20ZzFF0JPKNvtoawD5_0pHnqv";

export const USER_AVATAR_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuA4kLIPhvTSp-6thHg_iz7hqQx_ssZ0-_mQlAEOc5xiTJoqT0FJ4FTsnPrUjOB64BdS86xrGWscbBrVibNCd5HG9jldxe0SftsCiACHM63jULp29Sz6-dekNDso84yy66eZHNFK0QNjjtgHN2DiNar13fiuXLPHZt6TyRBnYkcEJlzH4GnyHNLCxtxvXyQ24hD_tydyvCZOT6JZaDw56-3bCaF-QzC-Sqysl-YJ8u8GiCY3xJCdLJ9obQ";

export const HERO_BG_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuBuUQWX4fGJrYPxqQtTZCgXJyll6h5dANNXgbmIyYXcMVeF5q5VtGoGVUp9Q7moTlGGDsiX2UqA2OJ3_t4lU3GRGp23GGIYaOzZ_Pwksz14bDOQJjrxeQJEfMlCfqM7vfELQBKxVrYdxdg1CnwZhjLl50KNRIVsnoUcXC0SRqL8AlWeIo_vxG9fpK4k16eqwshH2CnBVuHLgL1We-JuhNYAlhQ5FgG_bMRxlMYhmFR0MNHyrtM-tOEYsg";

export const EDITORIAL_STREET_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuCxApTLpXJMOmMLvRC82dSDoeyqAz_QKVgi_EXOELP72NxVM-x5hZwvy5SxCDCZDl_OCdid_7DY70r7P5_VcB2zOLM351yJyjIKlPclcE4Gj_fFJzKFooGO1O0dYC4F3jM3gxYrPeuAZTKROPjGcZNGDqI0B13KMrUnM-KRNlQJtHTG_sRp_PBGV7-4eeh6Tm_vc95Ca3UhGl7lxEj1J-IGqZFHs6Ajbao02T_cdLkm7k-fjYAWRHVbzA";

export const WORKSHOP_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuB6swtRFuUaPzaUhBUOwTpymze9wEZlUgMMtEwaRN9IYX5saqLomai5KFZ65EUK8x0E7325Zf7XfJ056M-7lNWklusZlR0-NFnaIaX1nJCwi3DK5Z4zCyrMhjMmkv7lM0lBVHJphi0EiwzrMDjXcIACUiXMg_vEWxoKNdk5tyiiBawuLC5U77ke5qvXXvLCWnWpIS1mrc0LdAhf5Fc-fa5xrN6p0ZFoHsHtgfD6INFukZEQJw5IktOgdw";

export const CATEGORIES = [
  {
    id: "oversized-tees",
    title: "OVERSIZED TEES",
    tag: "DROP 04 / RELAXED FIT",
    desc: "Boxy drop-shoulder tailored cuts in 240+ GSM.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_NuJPntyJIx0kpvdbjocn0GZqaQaxyMOv-HPKWxhV_w82YMrhfGuqPgHS0cAeMqt5vz57Nm8PdVJt3Nwnof_5dYeqaHp8BoNKA6dqV8it6nUxlI9y_8T5nPsAWjSr3DJjjLembZXcI0sqHXjBaceJ17lVzuTQIpLJQcPqiTLdPiZK1ZPnFIDHwf2nduP7YvLs3StR51VrRwq-JICVOp_zvalFsL_JOwjJrlGcuDyD9cFjnGKKXCO0iw"
  },
  {
    id: "graphic-editions",
    title: "GRAPHIC TEES",
    tag: "DISTRESSED & SCREENED",
    desc: "Raw subcultural visual treatments and acid wash bases.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhyloS7BR5hM1JAuHoHHipEkl0DxjrrsqUYy3u8NSUGl3-Qa8zcmypNjEr4OT8I27iXPJ_7qNxjzg3pbRFCDrkZTOZotdCFbja-zoTo2loJXJreFW93g-MyPU2hG3SpNWP-xncdkbOol5qHemnXdPJVB7JL9Zwh-JEJgoigQ1tgI2oITp3uf6U5rhxTPTrwJ0AcKLQsUnzl7JSGJ7tEWqn5lVGo-ZZMgOdEepe0lMww6sUsSB_JaZUsQ"
  },
  {
    id: "essential-tees",
    title: "ESSENTIAL TEES",
    tag: "MINIMALIST LUXURY",
    desc: "Clean non-branded heavyweight architectural foundations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUAV40_SwFYZfShT_imSAWk-XEsMLBEUhKolHEX60GNUAbmbCL7syQuFIPDjPucNPqfl9RdVqks77QSZ0HXHM05TJpi9Ox7JQDDU7iiQg4Vkg-uEnVu3ZuftpN1R9C4GneB4uZgoHilINePYrH1yfS9YeQC5SrIukKHKjqrCvOz_M0z_bJIH7QzArLdw7G07o5nXJb0k0XnuHPfqbI81WCbIOAe2-vBqFD5dQzBLBVToDVDYfKZjHxZQ"
  },
  {
    id: "new-arrivals",
    title: "NEW ARRIVALS",
    tag: "AUTUMN / WINTER 25",
    desc: "Newly minted outerwear, heavy pullovers & pants.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQm3M1_BoKFoKylb1XiWYzpDfh3BcaFeDJFYyTJwImb87FjP2kLZMxq6FsiXuZlE7VZi2N_odpXu52Ksmyds4Qejfsdm_iFHPft11KRYNZ2XWguQvp_7r-RaRy_cbGSXwUvEvqv6KBYVr-oK7NxsHiS6zGdq9jX0hY5xSXmIrW-U4-5_LyoGC2AJw0rRkglFy5DzEIA-69wSyFFT95db96J3J3hYp2P4i32jj_qBzpWqvlWmqndTu_Gw"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "monolith-280gsm-tee",
    name: "MONOLITH 280GSM TEE",
    subtitle: "Onyx Black Heavyweight Cut",
    category: "OVERSIZED TEES",
    tag: "CORE COLLECTION // 280 GSM",
    price: 4950,
    originalPrice: 6200,
    gsm: 280,
    sku: "CLP-MNL-280-BLK",
    alt: "Editorial product photo of an oversized luxury onyx black t-shirt made of 280 GSM heavyweight cotton.",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmut48ex_VVv8orc4kudSbuR65RDC0m4XRc373suDykHcvMf8tRTNRvKsCM7q34C0CdX5_PuGx7KYlksUP_5ggPN5SURKiqeiqJVHr8-5FpA4LyFuav1wOm1yLzczWmlNPpoDuMhjJ_aGuKDPBc8PAheD9w7mfvMs_vDXa3UpwbPvAHXO1Kf_PzZYDjAH96k4LgiqthDCghaHlaft8lDzjQc0qEmt6oKC3M8OMnNG5kJ9Rq3GvHZcmtA",
      front: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0Y0PHGccQTCAvTD_-l7x5q0yA2yL8rX9vAaAt-DAiuRMFSGnnCDp-Ql30Yr4I0u3GD0T5as680rXQvoPv2zBzGHOV6OBd616PsKjV-PB-pLROJEZV2YRLkfeezFIm_Bdt19Rz7h2imsCE7Yo2Z9QbjNwD3XBWHnaHUNva-1-F8i43Lo5iS4liqItsGpovIv8Eve15DXw6uS1Rl6bztrJ-sxGGcbIKv8Nj_xdo8hr0hrss6L9R34Vx5Q",
      back: "https://lh3.googleusercontent.com/aida-public/AB6AXuA326ToqDj801bE6mm2qTF6AnyWhAM1a8I_ComP2mtb7PTRao_5YNIQxpVHV5omkzmFlHCSRbJwN0e-QOktBR87rP8BI2bs6lmqzohmnFYM3Wh7vmLtriRaVGUu80sF1RASDFWjdSVZM8Gg0xIlAKWjfaRF841knYz4WfmM1Lbn2GZIlNLeY66lz1Sh66RPOG1IuKL_ozr9yd_KRdwFTd0NHK3oDsaPRDhD8uubyQsXD71r-NCdcgTU5w",
      weave: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOusIEPHBVV9qC2SjesvmvdMQYLLGOeZDRp_jRqv7BlBPq1Li7CWxwQjmU5dhiWy4VETWjsfL94PRPkUT5ra4rkdzmuIilazAl6irmnjrgH6oHLPfw2LIdoO7aCiklsaUMDcEoCzs0CSi0TQCysLpgWVTUkYAWvSv_k_yOk0IPxOaZDVYjLH7_8q9fm_gCUEOiDiUB8xZ0HaGFGhvJ8nYkPrjP7nS2h-vj2ww8PKJZEjPPN4nYJcSjnQ",
      flat: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo8riHkSlMiH0n7sRFAiWzJRczvjBCy-6YJ1HyfQB4AkoKUI6s-GjQpmuAmbYeOe5-qZwIr163YBt5jq6C5ZagDfbjqLhtN7vvjRZ9EfijQYhd_tYc1wt32EGON0SOm8Ejlp-WBEErgRcMGgyivmPNwQJTDVYuUsHUtwBLwlJwahAhej975hC2_kYhc6gQQQGHd25oUSBQDuQd5phfOjR2KEuHXa_jSbSeRnjGePYCFPJt6tKoLV5bMw"
    },
    colors: [
      { name: "ONYX BLACK", hex: "#0a0a0a" },
      { name: "WASHED CHARCOAL", hex: "#2a2a2a" },
      { name: "VINTAGE BONE", hex: "#dcd8cc" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    rating: 4.9,
    reviewsCount: 48,
    badge: "CORE COLLECTION // 280 GSM",
    kokoInstallment: 1650
  },
  {
    id: "cyber-street-acid-tee",
    name: "CYBER-STREET ACID TEE",
    subtitle: "Mineral Washed Graphic Cut",
    category: "GRAPHIC EDITIONS",
    tag: "SUB-URBAN SERIES",
    price: 5400,
    originalPrice: 6500,
    gsm: 260,
    sku: "CLP-CYB-09-VNT",
    alt: "Editorial streetwear model wearing cybernetic acid-wash graphic t-shirt with large distressed abstract typography on chest.",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrMk-ytReE34TxV6MHDkD37rzeufArYt2kZ5Wl4YfVOkpb-0idjvCxhcN-JgMhoF2v0YCVcmoeWV2kbQvcnIj0JA8X8qm4H0Y5YG8GvFx_MnX001DuzG-7YmxCM1ewV-CVgRqZwprmtXWZH039Uz4PChuZd7M6YgHXmXnEPJMCLmGOrq9vavdtOplhdEdcymbQyL7jEkAgj0UwfVvImc_I04dADtXJMkuTconZj0VJOHIkAtNq5e3wFA",
      front: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrMk-ytReE34TxV6MHDkD37rzeufArYt2kZ5Wl4YfVOkpb-0idjvCxhcN-JgMhoF2v0YCVcmoeWV2kbQvcnIj0JA8X8qm4H0Y5YG8GvFx_MnX001DuzG-7YmxCM1ewV-CVgRqZwprmtXWZH039Uz4PChuZd7M6YgHXmXnEPJMCLmGOrq9vavdtOplhdEdcymbQyL7jEkAgj0UwfVvImc_I04dADtXJMkuTconZj0VJOHIkAtNq5e3wFA",
      back: "https://lh3.googleusercontent.com/aida-public/AB6AXuBB_e36G_bSbKkQrJaMO-5mEh-W9gJxeP6Tz7aN3smK5NAKG82_z2Gnp6Ff931mHzmX_jgpyrR0hqPr1qTmTBLDIioVBYoQtT6iN3Bh8BjZz3RC1UdeHv3H6rXYfVeKxaMUinx2ikOqe5-l8NyNRbrrFxYQVV-VCLuWKHnvhq6u1CdeKBY28HQGqwsRAYeHmXs6DewlBg4A_usmVamSDz_Q5QljZGBltFbdgvO2wQw3Di1YGATKsC5e8Q",
      weave: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOusIEPHBVV9qC2SjesvmvdMQYLLGOeZDRp_jRqv7BlBPq1Li7CWxwQjmU5dhiWy4VETWjsfL94PRPkUT5ra4rkdzmuIilazAl6irmnjrgH6oHLPfw2LIdoO7aCiklsaUMDcEoCzs0CSi0TQCysLpgWVTUkYAWvSv_k_yOk0IPxOaZDVYjLH7_8q9fm_gCUEOiDiUB8xZ0HaGFGhvJ8nYkPrjP7nS2h-vj2ww8PKJZEjPPN4nYJcSjnQ",
      flat: "https://lh3.googleusercontent.com/aida-public/AB6AXuBB_e36G_bSbKkQrJaMO-5mEh-W9gJxeP6Tz7aN3smK5NAKG82_z2Gnp6Ff931mHzmX_jgpyrR0hqPr1qTmTBLDIioVBYoQtT6iN3Bh8BjZz3RC1UdeHv3H6rXYfVeKxaMUinx2ikOqe5-l8NyNRbrrFxYQVV-VCLuWKHnvhq6u1CdeKBY28HQGqwsRAYeHmXs6DewlBg4A_usmVamSDz_Q5QljZGBltFbdgvO2wQw3Di1YGATKsC5e8Q"
    },
    colors: [
      { name: "VINTAGE BLACK", hex: "#1f1f1f" },
      { name: "DISTRESSED GREY", hex: "#4b4b4b" }
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    rating: 4.8,
    reviewsCount: 32,
    badge: "LIMITED RUN",
    kokoInstallment: 1800
  },
  {
    id: "identity-relaxed-hoodie",
    name: "IDENTITY RELAXED HOODIE",
    subtitle: "Pitch Black Heavyweight Fleece",
    category: "HOODIES & SWEATS",
    tag: "HEAVY FLEECE // 450 GSM",
    price: 8900,
    originalPrice: 10500,
    gsm: 450,
    sku: "CLP-ID-HOD-450",
    alt: "Editorial streetwear photograph of a thick 450 GSM pitch-black fleece hoodie draped on a minimalist dark metal mannequin against a raw concrete interior wall.",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWOMLJfWvJJkLV-348CCOA41RUiGFVyobJkFF0D2vH2gHq3NiSh1IQQOpCwee6FzFiIapIAP0J9wTKFhorrX1vXKvvQZCdIOT3xHwIO-8lmdhL0xD8b9by1gRI42VFPLIkRKfVxcPpnwWfXktarZEgncdkvoj9l9SV1x3GwJ_hRQxadhEKnJKJleVdcFDznTJca7wbgfksLHLkQUMCrVkj_AyGm8l7WJ87g3XeAigG_wuwDU1jcfUuAQ",
      front: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWOMLJfWvJJkLV-348CCOA41RUiGFVyobJkFF0D2vH2gHq3NiSh1IQQOpCwee6FzFiIapIAP0J9wTKFhorrX1vXKvvQZCdIOT3xHwIO-8lmdhL0xD8b9by1gRI42VFPLIkRKfVxcPpnwWfXktarZEgncdkvoj9l9SV1x3GwJ_hRQxadhEKnJKJleVdcFDznTJca7wbgfksLHLkQUMCrVkj_AyGm8l7WJ87g3XeAigG_wuwDU1jcfUuAQ",
      back: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-4bRLDc8nsuTDmLoGQhjBO35OkW0zP3W7SuSB2X2vqsxF4w5pTTNLgSaRbo2vu7S8XMQrOXDQTA7y_a_gbHCorUWoIDAL5_L3e0Y2c8YHnRwKqqzbhE6yMaXdcWmIdI_VZY8WBeyAA96wsHpqE-1tAtBVxkCdz0Omy4pM129Ser7lfwJ54uYPWBvqWpsp_kGuHfoM-clS98oR1RyP1EEzvQJdKP8FFVAXPKlN-G5tLZAeVpgrPPlr0w",
      weave: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOusIEPHBVV9qC2SjesvmvdMQYLLGOeZDRp_jRqv7BlBPq1Li7CWxwQjmU5dhiWy4VETWjsfL94PRPkUT5ra4rkdzmuIilazAl6irmnjrgH6oHLPfw2LIdoO7aCiklsaUMDcEoCzs0CSi0TQCysLpgWVTUkYAWvSv_k_yOk0IPxOaZDVYjLH7_8q9fm_gCUEOiDiUB8xZ0HaGFGhvJ8nYkPrjP7nS2h-vj2ww8PKJZEjPPN4nYJcSjnQ",
      flat: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWOMLJfWvJJkLV-348CCOA41RUiGFVyobJkFF0D2vH2gHq3NiSh1IQQOpCwee6FzFiIapIAP0J9wTKFhorrX1vXKvvQZCdIOT3xHwIO-8lmdhL0xD8b9by1gRI42VFPLIkRKfVxcPpnwWfXktarZEgncdkvoj9l9SV1x3GwJ_hRQxadhEKnJKJleVdcFDznTJca7wbgfksLHLkQUMCrVkj_AyGm8l7WJ87g3XeAigG_wuwDU1jcfUuAQ"
    },
    colors: [
      { name: "PITCH BLACK", hex: "#0b0c0c" },
      { name: "SMOKE CHARCOAL", hex: "#3b3d3f" }
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    inStock: true,
    rating: 5.0,
    reviewsCount: 26,
    badge: "BESTSELLER",
    kokoInstallment: 2966
  },
  {
    id: "district-cargo-sweatpants",
    name: "DISTRICT CARGO SWEATPANTS",
    subtitle: "Charcoal Custom Terry Weave",
    category: "BOTTOMS",
    tag: "TACTICAL FLEECE",
    price: 7200,
    originalPrice: 8500,
    gsm: 380,
    sku: "CLP-DST-SWP-CHR",
    alt: "Editorial fashion look of a model from the waist down wearing dark charcoal grey relaxed heavyweight utility cargo sweatpants.",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1p31-aybJFNZm8LI3kafx6dK-CdKqRMQwbmFlBiSqNwsUf7wUi5fLt-Yz1jPiZujCANkWKTxyt2kMEGFD3jNccWZWQifp8Q8WJ9tguu3Kd-1kXz6_-8nkwDapbjZoRRm4s5hD7EhtlTwcPdznvce5joIzcPQfBBt3yd3cmk5LNPwiXDXgQ2O8n715Eaxui4PhUsZY6GWVksQwBhteC_w5mJWXkfkz9c5ffB-jM4V35mBxS6QXR0tGGQ",
      front: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1p31-aybJFNZm8LI3kafx6dK-CdKqRMQwbmFlBiSqNwsUf7wUi5fLt-Yz1jPiZujCANkWKTxyt2kMEGFD3jNccWZWQifp8Q8WJ9tguu3Kd-1kXz6_-8nkwDapbjZoRRm4s5hD7EhtlTwcPdznvce5joIzcPQfBBt3yd3cmk5LNPwiXDXgQ2O8n715Eaxui4PhUsZY6GWVksQwBhteC_w5mJWXkfkz9c5ffB-jM4V35mBxS6QXR0tGGQ",
      back: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdO7nrupekBCjq0IlLZzvAru-lEw_4znQt3nLcKK9WTJLRcBgcnxOMd6uTzt4lSUT4tDM-b07-DHZCPMpjpF7CgrW3Uvu2T2NIeczrpinl63ZioqqBR12PxZhqNsH75OSNp_97ynMVg6MtVpKH3-8lIa65nWz7OcNc298Lk-EJyKWolG959j-pjLTwlXGVgmPXNja15hTNCPuWDZt6zw1TmUluEOlIlalXKb9OVdT4cAIpAPYF3-qgeQ",
      weave: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOusIEPHBVV9qC2SjesvmvdMQYLLGOeZDRp_jRqv7BlBPq1Li7CWxwQjmU5dhiWy4VETWjsfL94PRPkUT5ra4rkdzmuIilazAl6irmnjrgH6oHLPfw2LIdoO7aCiklsaUMDcEoCzs0CSi0TQCysLpgWVTUkYAWvSv_k_yOk0IPxOaZDVYjLH7_8q9fm_gCUEOiDiUB8xZ0HaGFGhvJ8nYkPrjP7nS2h-vj2ww8PKJZEjPPN4nYJcSjnQ",
      flat: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdO7nrupekBCjq0IlLZzvAru-lEw_4znQt3nLcKK9WTJLRcBgcnxOMd6uTzt4lSUT4tDM-b07-DHZCPMpjpF7CgrW3Uvu2T2NIeczrpinl63ZioqqBR12PxZhqNsH75OSNp_97ynMVg6MtVpKH3-8lIa65nWz7OcNc298Lk-EJyKWolG959j-pjLTwlXGVgmPXNja15hTNCPuWDZt6zw1TmUluEOlIlalXKb9OVdT4cAIpAPYF3-qgeQ"
    },
    colors: [
      { name: "CHARCOAL TERRY", hex: "#2f3133" },
      { name: "MATTE BLACK", hex: "#111111" }
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    inStock: true,
    rating: 4.9,
    reviewsCount: 39,
    badge: "MULTI-POCKET",
    kokoInstallment: 2400
  },
  {
    id: "void-260gsm-tee",
    name: "VOID 260GSM TEE - JET BLACK",
    subtitle: "Jet Black Heavyweight Cut",
    category: "OVERSIZED TEES",
    tag: "CORE DROP",
    price: 4950,
    originalPrice: 5800,
    gsm: 260,
    sku: "CLP-VOID-260",
    alt: "High fashion male model in dark studio setting wearing an ultra-relaxed jet black 260gsm heavyweight architectural t-shirt.",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSEUYM5tmc_lgfpWbUbQBEe9S6gz9plJw02rLJY6NWGPD_HfLdz-M2rf3fWhnG5n1OXJUvP6l8gjdUWl6oIoCWrZudgUEpeBQO8H-I0ZbsjnrsQUgxCS4biQtnI71ROBua0QBPShQ7nOzpTJmqGG5pJPmfNXivZ5DCzuEjUHs8Bra0mUjg3eAkhXhvC29UyuzW8j44a_Se0BTEOTUNCzSMdAEzYhaLvn9xOe5JaZD4uTCetYUdO2rUCg",
      front: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSEUYM5tmc_lgfpWbUbQBEe9S6gz9plJw02rLJY6NWGPD_HfLdz-M2rf3fWhnG5n1OXJUvP6l8gjdUWl6oIoCWrZudgUEpeBQO8H-I0ZbsjnrsQUgxCS4biQtnI71ROBua0QBPShQ7nOzpTJmqGG5pJPmfNXivZ5DCzuEjUHs8Bra0mUjg3eAkhXhvC29UyuzW8j44a_Se0BTEOTUNCzSMdAEzYhaLvn9xOe5JaZD4uTCetYUdO2rUCg",
      back: "https://lh3.googleusercontent.com/aida-public/AB6AXuA326ToqDj801bE6mm2qTF6AnyWhAM1a8I_ComP2mtb7PTRao_5YNIQxpVHV5omkzmFlHCSRbJwN0e-QOktBR87rP8BI2bs6lmqzohmnFYM3Wh7vmLtriRaVGUu80sF1RASDFWjdSVZM8Gg0xIlAKWjfaRF841knYz4WfmM1Lbn2GZIlNLeY66lz1Sh66RPOG1IuKL_ozr9yd_KRdwFTd0NHK3oDsaPRDhD8uubyQsXD71r-NCdcgTU5w",
      weave: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOusIEPHBVV9qC2SjesvmvdMQYLLGOeZDRp_jRqv7BlBPq1Li7CWxwQjmU5dhiWy4VETWjsfL94PRPkUT5ra4rkdzmuIilazAl6irmnjrgH6oHLPfw2LIdoO7aCiklsaUMDcEoCzs0CSi0TQCysLpgWVTUkYAWvSv_k_yOk0IPxOaZDVYjLH7_8q9fm_gCUEOiDiUB8xZ0HaGFGhvJ8nYkPrjP7nS2h-vj2ww8PKJZEjPPN4nYJcSjnQ",
      flat: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo8riHkSlMiH0n7sRFAiWzJRczvjBCy-6YJ1HyfQB4AkoKUI6s-GjQpmuAmbYeOe5-qZwIr163YBt5jq6C5ZagDfbjqLhtN7vvjRZ9EfijQYhd_tYc1wt32EGON0SOm8Ejlp-WBEErgRcMGgyivmPNwQJTDVYuUsHUtwBLwlJwahAhej975hC2_kYhc6gQQQGHd25oUSBQDuQd5phfOjR2KEuHXa_jSbSeRnjGePYCFPJt6tKoLV5bMw"
    },
    colors: [
      { name: "JET BLACK", hex: "#111111" },
      { name: "GRAPHITE", hex: "#2a2b2c" },
      { name: "RAW BONE", hex: "#e8e6e3" }
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    inStock: true,
    rating: 4.9,
    reviewsCount: 19,
    kokoInstallment: 1650
  },
  {
    id: "colombo-underground-tee",
    name: "COLOMBO UNDERGROUND TEE",
    subtitle: "Distressed Screened Edition",
    category: "GRAPHIC EDITIONS",
    tag: "NEW PRINT",
    price: 5200,
    originalPrice: 6200,
    gsm: 250,
    sku: "CLP-CMB-UND-02",
    alt: "Model posing in front of brutalist concrete wall wearing a dark grey streetwear t-shirt with modern typography graphic Colombo Underground.",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYN6fpIbTTn_ZpDA3S28nsQ1GuEZ0fvnPxcrf1rM5n9RlaavMtfutKj5aJ3HIPWSU98zKosoRR0HMZCd3Mk7bXl0HXJH347oB69VQHOy985ISdbleTyorFJBoB22_MuL6LrPLM9FhzFHZz6MX7U_QbpsxQ6ODbrsWAFYs0OXDXsYqrGmd66ueAgxmCqReSvmJg8Fp15ij3A6a13_VOeZq5tBn__e9jIgRzH4Y_Xl-wTeZER_kMsYekPA",
      front: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYN6fpIbTTn_ZpDA3S28nsQ1GuEZ0fvnPxcrf1rM5n9RlaavMtfutKj5aJ3HIPWSU98zKosoRR0HMZCd3Mk7bXl0HXJH347oB69VQHOy985ISdbleTyorFJBoB22_MuL6LrPLM9FhzFHZz6MX7U_QbpsxQ6ODbrsWAFYs0OXDXsYqrGmd66ueAgxmCqReSvmJg8Fp15ij3A6a13_VOeZq5tBn__e9jIgRzH4Y_Xl-wTeZER_kMsYekPA",
      back: "https://lh3.googleusercontent.com/aida-public/AB6AXuBB_e36G_bSbKkQrJaMO-5mEh-W9gJxeP6Tz7aN3smK5NAKG82_z2Gnp6Ff931mHzmX_jgpyrR0hqPr1qTmTBLDIioVBYoQtT6iN3Bh8BjZz3RC1UdeHv3H6rXYfVeKxaMUinx2ikOqe5-l8NyNRbrrFxYQVV-VCLuWKHnvhq6u1CdeKBY28HQGqwsRAYeHmXs6DewlBg4A_usmVamSDz_Q5QljZGBltFbdgvO2wQw3Di1YGATKsC5e8Q",
      weave: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOusIEPHBVV9qC2SjesvmvdMQYLLGOeZDRp_jRqv7BlBPq1Li7CWxwQjmU5dhiWy4VETWjsfL94PRPkUT5ra4rkdzmuIilazAl6irmnjrgH6oHLPfw2LIdoO7aCiklsaUMDcEoCzs0CSi0TQCysLpgWVTUkYAWvSv_k_yOk0IPxOaZDVYjLH7_8q9fm_gCUEOiDiUB8xZ0HaGFGhvJ8nYkPrjP7nS2h-vj2ww8PKJZEjPPN4nYJcSjnQ",
      flat: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo8riHkSlMiH0n7sRFAiWzJRczvjBCy-6YJ1HyfQB4AkoKUI6s-GjQpmuAmbYeOe5-qZwIr163YBt5jq6C5ZagDfbjqLhtN7vvjRZ9EfijQYhd_tYc1wt32EGON0SOm8Ejlp-WBEErgRcMGgyivmPNwQJTDVYuUsHUtwBLwlJwahAhej975hC2_kYhc6gQQQGHd25oUSBQDuQd5phfOjR2KEuHXa_jSbSeRnjGePYCFPJt6tKoLV5bMw"
    },
    colors: [
      { name: "MINERAL WASH", hex: "#1b1b1b" },
      { name: "OFF WHITE DUST", hex: "#dfdeda" }
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    rating: 4.8,
    reviewsCount: 22,
    kokoInstallment: 1733
  },
  {
    id: "identity-archival-sweatshirt",
    name: "IDENTITY ARCHIVAL BOXY SWEATSHIRT",
    subtitle: "Washed Slate 400GSM Fleece",
    category: "HOODIES & SWEATS",
    tag: "LIMITED DROP",
    price: 7800,
    originalPrice: 9200,
    gsm: 400,
    sku: "CLP-ID-SWT-400",
    alt: "Male fashion model wearing heavy 400gsm boxy archival crewneck sweatshirt in washed slate grey.",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3pACRm0muhry0-CPKmLXAA1UqAKf3RnGECmeApGkA5106FWeHmm_tVNabQ-nW0mR_DIA0etisUEQa5o56Jky8F8nMlFd44liQJr8RrZIkxwXF_xPaFuPpevxpJFbPcoaGKHkl-gNhsc4NDy-F6Ax_8CjlXkCcxlOHXPgPRyWJzK4qYc7WA4FAfkN3Dd3vea2yITFpHHAWr07at6IOuHYEUPg7SXidjtiTFwaMHdK_jHkWdZxlP6ntUw",
      front: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3pACRm0muhry0-CPKmLXAA1UqAKf3RnGECmeApGkA5106FWeHmm_tVNabQ-nW0mR_DIA0etisUEQa5o56Jky8F8nMlFd44liQJr8RrZIkxwXF_xPaFuPpevxpJFbPcoaGKHkl-gNhsc4NDy-F6Ax_8CjlXkCcxlOHXPgPRyWJzK4qYc7WA4FAfkN3Dd3vea2yITFpHHAWr07at6IOuHYEUPg7SXidjtiTFwaMHdK_jHkWdZxlP6ntUw",
      back: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-4bRLDc8nsuTDmLoGQhjBO35OkW0zP3W7SuSB2X2vqsxF4w5pTTNLgSaRbo2vu7S8XMQrOXDQTA7y_a_gbHCorUWoIDAL5_L3e0Y2c8YHnRwKqqzbhE6yMaXdcWmIdI_VZY8WBeyAA96wsHpqE-1tAtBVxkCdz0Omy4pM129Ser7lfwJ54uYPWBvqWpsp_kGuHfoM-clS98oR1RyP1EEzvQJdKP8FFVAXPKlN-G5tLZAeVpgrPPlr0w",
      weave: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOusIEPHBVV9qC2SjesvmvdMQYLLGOeZDRp_jRqv7BlBPq1Li7CWxwQjmU5dhiWy4VETWjsfL94PRPkUT5ra4rkdzmuIilazAl6irmnjrgH6oHLPfw2LIdoO7aCiklsaUMDcEoCzs0CSi0TQCysLpgWVTUkYAWvSv_k_yOk0IPxOaZDVYjLH7_8q9fm_gCUEOiDiUB8xZ0HaGFGhvJ8nYkPrjP7nS2h-vj2ww8PKJZEjPPN4nYJcSjnQ",
      flat: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo8riHkSlMiH0n7sRFAiWzJRczvjBCy-6YJ1HyfQB4AkoKUI6s-GjQpmuAmbYeOe5-qZwIr163YBt5jq6C5ZagDfbjqLhtN7vvjRZ9EfijQYhd_tYc1wt32EGON0SOm8Ejlp-WBEErgRcMGgyivmPNwQJTDVYuUsHUtwBLwlJwahAhej975hC2_kYhc6gQQQGHd25oUSBQDuQd5phfOjR2KEuHXa_jSbSeRnjGePYCFPJt6tKoLV5bMw"
    },
    colors: [
      { name: "SLATE GREY", hex: "#414346" },
      { name: "VOID BLACK", hex: "#181818" }
    ],
    sizes: ["M", "L", "XL"],
    inStock: true,
    rating: 4.9,
    reviewsCount: 15,
    kokoInstallment: 2600
  },
  {
    id: "prototype-01-cargo",
    name: "PROTOTYPE 01 CARGO - MATTE BLACK",
    subtitle: "Heavyweight Ripstop Tactical Cut",
    category: "BOTTOMS",
    tag: "PROTOTYPE",
    price: 7950,
    originalPrice: 9500,
    gsm: 340,
    sku: "CLP-PT01-CRG-BLK",
    alt: "Technical streetwear cargo pants in matte black cotton ripstop fabric with oversized angular utility 3D pockets.",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXYUGiw3rT77EHEyyQJ6slbRxHiYgfkD3_Za9JxhRsbTyuS9qFSwecuOn0soF16ASoMleYI558AkIaCwCh2Mce0yb3J3RFySQGii0YtfXHgcEm25ovTn-Zl90GcQeA1Y7tsGU5VqYcEE3qNbnleTDdLPmXlxTUQBGiMA9wABaEdJewErmTbBAcgSGZ_m1ZgQLbyQtIl5KDDtIdOcuRlQ23jUJ-ph5CahJ9c4NxyCj4Y_DDqMqUmloNSA",
      front: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXYUGiw3rT77EHEyyQJ6slbRxHiYgfkD3_Za9JxhRsbTyuS9qFSwecuOn0soF16ASoMleYI558AkIaCwCh2Mce0yb3J3RFySQGii0YtfXHgcEm25ovTn-Zl90GcQeA1Y7tsGU5VqYcEE3qNbnleTDdLPmXlxTUQBGiMA9wABaEdJewErmTbBAcgSGZ_m1ZgQLbyQtIl5KDDtIdOcuRlQ23jUJ-ph5CahJ9c4NxyCj4Y_DDqMqUmloNSA",
      back: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdO7nrupekBCjq0IlLZzvAru-lEw_4znQt3nLcKK9WTJLRcBgcnxOMd6uTzt4lSUT4tDM-b07-DHZCPMpjpF7CgrW3Uvu2T2NIeczrpinl63ZioqqBR12PxZhqNsH75OSNp_97ynMVg6MtVpKH3-8lIa65nWz7OcNc298Lk-EJyKWolG959j-pjLTwlXGVgmPXNja15hTNCPuWDZt6zw1TmUluEOlIlalXKb9OVdT4cAIpAPYF3-qgeQ",
      weave: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOusIEPHBVV9qC2SjesvmvdMQYLLGOeZDRp_jRqv7BlBPq1Li7CWxwQjmU5dhiWy4VETWjsfL94PRPkUT5ra4rkdzmuIilazAl6irmnjrgH6oHLPfw2LIdoO7aCiklsaUMDcEoCzs0CSi0TQCysLpgWVTUkYAWvSv_k_yOk0IPxOaZDVYjLH7_8q9fm_gCUEOiDiUB8xZ0HaGFGhvJ8nYkPrjP7nS2h-vj2ww8PKJZEjPPN4nYJcSjnQ",
      flat: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdO7nrupekBCjq0IlLZzvAru-lEw_4znQt3nLcKK9WTJLRcBgcnxOMd6uTzt4lSUT4tDM-b07-DHZCPMpjpF7CgrW3Uvu2T2NIeczrpinl63ZioqqBR12PxZhqNsH75OSNp_97ynMVg6MtVpKH3-8lIa65nWz7OcNc298Lk-EJyKWolG959j-pjLTwlXGVgmPXNja15hTNCPuWDZt6zw1TmUluEOlIlalXKb9OVdT4cAIpAPYF3-qgeQ"
    },
    colors: [
      { name: "MATTE BLACK", hex: "#121212" },
      { name: "MILITARY OLIVE", hex: "#2f352e" }
    ],
    sizes: ["30", "32", "34", "36"],
    inStock: true,
    rating: 5.0,
    reviewsCount: 38,
    kokoInstallment: 2650
  },
  {
    id: "raw-hem-heavyweight-tee-charcoal",
    name: "RAW HEM HEAVYWEIGHT TEE - CHARCOAL",
    subtitle: "Distressed Vintage Wash",
    category: "OVERSIZED TEES",
    tag: "RESTOCKED",
    price: 4750,
    originalPrice: 5600,
    gsm: 270,
    sku: "CLP-RWH-270-CHR",
    alt: "High quality close up editorial of male model wearing washed charcoal vintage oversized t-shirt with subtle raw unhemmed edges.",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHBkDGs7_iERPnxqRYfbeC81SyQ-SNj9HNdRSK4IBGXRux7JuhHgyXPaHPP6JYlk2zDTe_xL-nZ8ueUQwFFzH3VsD83IAQOLtxG7FTam3WTnbZHBCgFJ7PqBN-XFzCVZ07boiPZliNYO3jnC4wTfRlxmGZ27BLbgszsEopSr78Jy-wkiPY2tJzzFP0dER1R78J_W4zWHB5RbriGfrZEQmDGqlW_rftC9gdFNqKvCdAFeDPerLoEAiVbA",
      front: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHBkDGs7_iERPnxqRYfbeC81SyQ-SNj9HNdRSK4IBGXRux7JuhHgyXPaHPP6JYlk2zDTe_xL-nZ8ueUQwFFzH3VsD83IAQOLtxG7FTam3WTnbZHBCgFJ7PqBN-XFzCVZ07boiPZliNYO3jnC4wTfRlxmGZ27BLbgszsEopSr78Jy-wkiPY2tJzzFP0dER1R78J_W4zWHB5RbriGfrZEQmDGqlW_rftC9gdFNqKvCdAFeDPerLoEAiVbA",
      back: "https://lh3.googleusercontent.com/aida-public/AB6AXuA326ToqDj801bE6mm2qTF6AnyWhAM1a8I_ComP2mtb7PTRao_5YNIQxpVHV5omkzmFlHCSRbJwN0e-QOktBR87rP8BI2bs6lmqzohmnFYM3Wh7vmLtriRaVGUu80sF1RASDFWjdSVZM8Gg0xIlAKWjfaRF841knYz4WfmM1Lbn2GZIlNLeY66lz1Sh66RPOG1IuKL_ozr9yd_KRdwFTd0NHK3oDsaPRDhD8uubyQsXD71r-NCdcgTU5w",
      weave: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOusIEPHBVV9qC2SjesvmvdMQYLLGOeZDRp_jRqv7BlBPq1Li7CWxwQjmU5dhiWy4VETWjsfL94PRPkUT5ra4rkdzmuIilazAl6irmnjrgH6oHLPfw2LIdoO7aCiklsaUMDcEoCzs0CSi0TQCysLpgWVTUkYAWvSv_k_yOk0IPxOaZDVYjLH7_8q9fm_gCUEOiDiUB8xZ0HaGFGhvJ8nYkPrjP7nS2h-vj2ww8PKJZEjPPN4nYJcSjnQ",
      flat: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo8riHkSlMiH0n7sRFAiWzJRczvjBCy-6YJ1HyfQB4AkoKUI6s-GjQpmuAmbYeOe5-qZwIr163YBt5jq6C5ZagDfbjqLhtN7vvjRZ9EfijQYhd_tYc1wt32EGON0SOm8Ejlp-WBEErgRcMGgyivmPNwQJTDVYuUsHUtwBLwlJwahAhej975hC2_kYhc6gQQQGHd25oUSBQDuQd5phfOjR2KEuHXa_jSbSeRnjGePYCFPJt6tKoLV5bMw"
    },
    colors: [
      { name: "WASHED CHARCOAL", hex: "#3a3a3a" },
      { name: "PITCH BLACK", hex: "#1e1e1e" },
      { name: "CONCRETE GREY", hex: "#c8c5c0" },
      { name: "MILITARY DRAB", hex: "#464c44" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    rating: 4.8,
    reviewsCount: 28,
    kokoInstallment: 1583
  },
  {
    id: "minimalist-embroidered-logo-tee",
    name: "MINIMALIST EMBROIDERED LOGO TEE",
    subtitle: "Precision Embroidered Architectural Cotton",
    category: "ESSENTIAL TEES",
    tag: "EMBROIDERED CORE",
    price: 4950,
    originalPrice: 5800,
    gsm: 280,
    sku: "CLP-EMB-WHT-280",
    alt: "Model posing in minimal white streetwear t-shirt with precision embroidered high density black typography logo.",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF9yq8YPHPFV43CizqSm5uoe0BHGIxDJiLdnyKxCRF3q7v0NNVDxZNmzpHlqFJhnJtkOwArSyt_LkMIMccrBd3CJKbASQH6ouYnwzqfWEdc_JRPYStoHBkq3aHf5SDBCb6te-Bh-Uhefofbo2DAGxe8-Qx2RWD_52PWrrZMlkI1NDckX4KPt1ryhaYa_QhSUWHs6YLG675oeFP3qdt_Q3B3fI7QoaMJ_U-0MeS7o4KiY8S6rOkAJHbWQ",
      front: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF9yq8YPHPFV43CizqSm5uoe0BHGIxDJiLdnyKxCRF3q7v0NNVDxZNmzpHlqFJhnJtkOwArSyt_LkMIMccrBd3CJKbASQH6ouYnwzqfWEdc_JRPYStoHBkq3aHf5SDBCb6te-Bh-Uhefofbo2DAGxe8-Qx2RWD_52PWrrZMlkI1NDckX4KPt1ryhaYa_QhSUWHs6YLG675oeFP3qdt_Q3B3fI7QoaMJ_U-0MeS7o4KiY8S6rOkAJHbWQ",
      back: "https://lh3.googleusercontent.com/aida-public/AB6AXuA326ToqDj801bE6mm2qTF6AnyWhAM1a8I_ComP2mtb7PTRao_5YNIQxpVHV5omkzmFlHCSRbJwN0e-QOktBR87rP8BI2bs6lmqzohmnFYM3Wh7vmLtriRaVGUu80sF1RASDFWjdSVZM8Gg0xIlAKWjfaRF841knYz4WfmM1Lbn2GZIlNLeY66lz1Sh66RPOG1IuKL_ozr9yd_KRdwFTd0NHK3oDsaPRDhD8uubyQsXD71r-NCdcgTU5w",
      weave: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOusIEPHBVV9qC2SjesvmvdMQYLLGOeZDRp_jRqv7BlBPq1Li7CWxwQjmU5dhiWy4VETWjsfL94PRPkUT5ra4rkdzmuIilazAl6irmnjrgH6oHLPfw2LIdoO7aCiklsaUMDcEoCzs0CSi0TQCysLpgWVTUkYAWvSv_k_yOk0IPxOaZDVYjLH7_8q9fm_gCUEOiDiUB8xZ0HaGFGhvJ8nYkPrjP7nS2h-vj2ww8PKJZEjPPN4nYJcSjnQ",
      flat: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo8riHkSlMiH0n7sRFAiWzJRczvjBCy-6YJ1HyfQB4AkoKUI6s-GjQpmuAmbYeOe5-qZwIr163YBt5jq6C5ZagDfbjqLhtN7vvjRZ9EfijQYhd_tYc1wt32EGON0SOm8Ejlp-WBEErgRcMGgyivmPNwQJTDVYuUsHUtwBLwlJwahAhej975hC2_kYhc6gQQQGHd25oUSBQDuQd5phfOjR2KEuHXa_jSbSeRnjGePYCFPJt6tKoLV5bMw"
    },
    colors: [
      { name: "OPTIC WHITE", hex: "#f1efe9" },
      { name: "DEEP VOID", hex: "#181818" }
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    rating: 4.9,
    reviewsCount: 31,
    kokoInstallment: 1650
  },
  {
    id: "cyber-matrix-oversized-hoodie",
    name: "CYBER MATRIX OVERSIZED HOODIE",
    subtitle: "Heavyweight Double Layer Fleece",
    category: "HOODIES & SWEATS",
    tag: "HEAVY FLEECE",
    price: 9200,
    originalPrice: 11000,
    gsm: 450,
    sku: "CLP-CYB-MTX-HOD",
    alt: "Architectural black oversized hoodie with high double-layered structured hood, no drawstrings, subtle technical matrix silk screen typography along sleeve.",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-4bRLDc8nsuTDmLoGQhjBO35OkW0zP3W7SuSB2X2vqsxF4w5pTTNLgSaRbo2vu7S8XMQrOXDQTA7y_a_gbHCorUWoIDAL5_L3e0Y2c8YHnRwKqqzbhE6yMaXdcWmIdI_VZY8WBeyAA96wsHpqE-1tAtBVxkCdz0Omy4pM129Ser7lfwJ54uYPWBvqWpsp_kGuHfoM-clS98oR1RyP1EEzvQJdKP8FFVAXPKlN-G5tLZAeVpgrPPlr0w",
      front: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-4bRLDc8nsuTDmLoGQhjBO35OkW0zP3W7SuSB2X2vqsxF4w5pTTNLgSaRbo2vu7S8XMQrOXDQTA7y_a_gbHCorUWoIDAL5_L3e0Y2c8YHnRwKqqzbhE6yMaXdcWmIdI_VZY8WBeyAA96wsHpqE-1tAtBVxkCdz0Omy4pM129Ser7lfwJ54uYPWBvqWpsp_kGuHfoM-clS98oR1RyP1EEzvQJdKP8FFVAXPKlN-G5tLZAeVpgrPPlr0w",
      back: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWOMLJfWvJJkLV-348CCOA41RUiGFVyobJkFF0D2vH2gHq3NiSh1IQQOpCwee6FzFiIapIAP0J9wTKFhorrX1vXKvvQZCdIOT3xHwIO-8lmdhL0xD8b9by1gRI42VFPLIkRKfVxcPpnwWfXktarZEgncdkvoj9l9SV1x3GwJ_hRQxadhEKnJKJleVdcFDznTJca7wbgfksLHLkQUMCrVkj_AyGm8l7WJ87g3XeAigG_wuwDU1jcfUuAQ",
      weave: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOusIEPHBVV9qC2SjesvmvdMQYLLGOeZDRp_jRqv7BlBPq1Li7CWxwQjmU5dhiWy4VETWjsfL94PRPkUT5ra4rkdzmuIilazAl6irmnjrgH6oHLPfw2LIdoO7aCiklsaUMDcEoCzs0CSi0TQCysLpgWVTUkYAWvSv_k_yOk0IPxOaZDVYjLH7_8q9fm_gCUEOiDiUB8xZ0HaGFGhvJ8nYkPrjP7nS2h-vj2ww8PKJZEjPPN4nYJcSjnQ",
      flat: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWOMLJfWvJJkLV-348CCOA41RUiGFVyobJkFF0D2vH2gHq3NiSh1IQQOpCwee6FzFiIapIAP0J9wTKFhorrX1vXKvvQZCdIOT3xHwIO-8lmdhL0xD8b9by1gRI42VFPLIkRKfVxcPpnwWfXktarZEgncdkvoj9l9SV1x3GwJ_hRQxadhEKnJKJleVdcFDznTJca7wbgfksLHLkQUMCrVkj_AyGm8l7WJ87g3XeAigG_wuwDU1jcfUuAQ"
    },
    colors: [
      { name: "MATTE BLACK", hex: "#0d0e0e" },
      { name: "SLATE WEAVE", hex: "#525252" }
    ],
    sizes: ["M", "L", "XL", "2XL"],
    inStock: true,
    rating: 5.0,
    reviewsCount: 18,
    kokoInstallment: 3066
  },
  {
    id: "clipper-structured-tote-bag",
    name: "CLIPPER STRUCTURED TOTE BAG",
    subtitle: "Heavyweight Obsidian Canvas",
    category: "ACCESSORIES",
    tag: "HARD GOODS",
    price: 3450,
    originalPrice: 4200,
    sku: "CLP-ACC-TOT-01",
    alt: "Heavyweight industrial canvas tote bag in deep obsidian black with structural webbing straps, matte metal rivets and stark screen-printed CLIPPER signature typographic logo.",
    images: {
      hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2G3dsD_83bbnSg6nRaPIJJUlIwnslt7uXBNOZa1VLDj4mUgVQYltW8bTjAHOMm0enmVFhC2LvqRVYtoU7dDNRyQOSW44e1EU380blUCEW6gdZYLsRMxRnU4DXWrcc8-uDgqDq4TBpAxFuIfAwHTm-td9wJP9PNmkjxPmvwDsv3Ji8BkjKAGV2eSmSHGr_V3iYGJoqIneHd3GRv-M07oQJ4KnmvRfdS4kD2TNRdlIk49owTuNRSyv_6g",
      front: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2G3dsD_83bbnSg6nRaPIJJUlIwnslt7uXBNOZa1VLDj4mUgVQYltW8bTjAHOMm0enmVFhC2LvqRVYtoU7dDNRyQOSW44e1EU380blUCEW6gdZYLsRMxRnU4DXWrcc8-uDgqDq4TBpAxFuIfAwHTm-td9wJP9PNmkjxPmvwDsv3Ji8BkjKAGV2eSmSHGr_V3iYGJoqIneHd3GRv-M07oQJ4KnmvRfdS4kD2TNRdlIk49owTuNRSyv_6g",
      back: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwCA9bkSkEuaTLgOHYIlmYgkUyshPXsxCXuHgjCY2sRtALGS5s_Iu_E4q7YCw2kqbHVgXHhjeW74vQsvUjlYghOIAMn4ym-d-dLTZ4C_DIuqM-uNDupcHJSlgscVL0cGK0g4qwNyVoxDnu-WklN28CHQbepXXQhTLm-AlgLYcWLg8UDEfV48U2PGt-e7zR443y3uw6wjNKdeL-o8fxa7nDs1uLuvrO0OP739CX-bfG04djd8DiER7_FQ",
      weave: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOusIEPHBVV9qC2SjesvmvdMQYLLGOeZDRp_jRqv7BlBPq1Li7CWxwQjmU5dhiWy4VETWjsfL94PRPkUT5ra4rkdzmuIilazAl6irmnjrgH6oHLPfw2LIdoO7aCiklsaUMDcEoCzs0CSi0TQCysLpgWVTUkYAWvSv_k_yOk0IPxOaZDVYjLH7_8q9fm_gCUEOiDiUB8xZ0HaGFGhvJ8nYkPrjP7nS2h-vj2ww8PKJZEjPPN4nYJcSjnQ",
      flat: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2G3dsD_83bbnSg6nRaPIJJUlIwnslt7uXBNOZa1VLDj4mUgVQYltW8bTjAHOMm0enmVFhC2LvqRVYtoU7dDNRyQOSW44e1EU380blUCEW6gdZYLsRMxRnU4DXWrcc8-uDgqDq4TBpAxFuIfAwHTm-td9wJP9PNmkjxPmvwDsv3Ji8BkjKAGV2eSmSHGr_V3iYGJoqIneHd3GRv-M07oQJ4KnmvRfdS4kD2TNRdlIk49owTuNRSyv_6g"
    },
    colors: [
      { name: "OBSIDIAN BLACK", hex: "#141414" }
    ],
    sizes: ["ONE SIZE"],
    inStock: true,
    rating: 4.8,
    reviewsCount: 14,
    kokoInstallment: 1150
  }
];

export const COMPLETE_THE_FIT_ITEMS = [
  {
    id: "sector-ripstop-cargo",
    name: "SECTOR RIPSTOP CARGO TROUSER",
    category: "Bottoms // Tactical",
    tag: "DROP 04 ESSENTIAL",
    price: 7200,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqo-6fzHhBd1lIL7MuD6a4hjHMeJIwCoo2HH1r4f7iIV6gaNeooiWefQ8EnWOBBiwmcNZ0bmcoYlBNuHU5y1xbPVB4K6xKEUMj2dMGwvAYHq-H3NslPO1VFLU0TwUHa2vdiPM8MZYHngilt4Yg2GAACWP_AjKrbAH1JkbFGO1PxfnHRjOrmbXQFN5MxKmrnMZm24d1jFKBXLHH4w50x9pldLHQpO9Wh88uCdq_3lZ7wduZtLWzkWRfuw"
  },
  {
    id: "apex-modular-rig",
    name: "APEX MODULAR CROSSBODY RIG",
    category: "Accessories // Utility",
    tag: "HARD GOODS",
    price: 3800,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwCA9bkSkEuaTLgOHYIlmYgkUyshPXsxCXuHgjCY2sRtALGS5s_Iu_E4q7YCw2kqbHVgXHhjeW74vQsvUjlYghOIAMn4ym-d-dLTZ4C_DIuqM-uNDupcHJSlgscVL0cGK0g4qwNyVoxDnu-WklN28CHQbepXXQhTLm-AlgLYcWLg8UDEfV48U2PGt-e7zR443y3uw6wjNKdeL-o8fxa7nDs1uLuvrO0OP739CX-bfG04djd8DiER7_FQ"
  },
  {
    id: "identity-heavy-rib-socks",
    name: "IDENTITY HEAVY RIB SOCKS (3-PACK)",
    category: "Hosiery // Archival",
    tag: "3-PACK ACCESSORY",
    price: 1800,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXLjQqU2-LL6lQRfp7eu3WH7Rs4sZb_YJ9ruNxG9s1zaI833r-XKQLCUDiXdVHz8lFbenyvGRiUeFF0bHnFK78Ha4oq8cxfnI71Rlc46bqMomXc3gCUxIrwxmV-WttqSdl1AoAO6qVkkOBFVAmcVYwoE-Q8KeQyYbo3u-pZWTjiOA9GMRSFeZHiviBwVa56KPeuisWo7rceRDm6SQnobmbDVzWqWW41mu6Wc3zyfDbU7NeWiQOreTZHA"
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Danushka K.",
    location: "Colombo 04, LK",
    rating: 5,
    date: "2 DAYS AGO",
    title: "Unbelievable fabric weight",
    content: "The 280 GSM is legitimate. Does not lose shape in the collar after washing, which is rare for tees sold in Sri Lanka. Got it via PromptX next morning in Colombo 04.",
    verified: true,
    sizePurchased: "SIZE L"
  },
  {
    id: "rev-2",
    author: "Tariq A.",
    location: "Colombo 07, LK",
    rating: 5,
    date: "1 WEEK AGO",
    title: "The exact boxy silhouette I needed",
    content: "Drop shoulder sits cleanly without bunching up under the arms. Matte deep black finish matches my technical cargo gear flawlessly. Paid easily with Koko Pay 3-installments.",
    verified: true,
    sizePurchased: "SIZE XL"
  },
  {
    id: "rev-3",
    author: "Shehan P.",
    location: "Kandy, LK",
    rating: 5,
    date: "2 WEEKS AGO",
    title: "Quality rivals international brands",
    content: "Compared to imported heavyweight tees that cost double, CLIPPER outperforms. Solid heavy collar and zero shrinkage after initial cold cycle.",
    verified: true,
    sizePurchased: "SIZE M"
  },
  {
    id: "rev-4",
    author: "Kasun P.",
    location: "Colombo 07, LK",
    rating: 5,
    date: "3 WEEKS AGO",
    title: "Heavyweight collar does not sag",
    content: "The 280 GSM collar does not sag even after 20 washes. Easily the best oversized tee in Sri Lanka.",
    verified: true,
    sizePurchased: "SIZE L"
  },
  {
    id: "rev-5",
    author: "Aamina R.",
    location: "Negombo, LK",
    rating: 5,
    date: "1 MONTH AGO",
    title: "True boxy streetwear drape",
    content: "Fit is true boxy streetwear, exactly what we needed. Heavy fabric hangs so well on the shoulders.",
    verified: true,
    sizePurchased: "SIZE S"
  }
];

export const INITIAL_CART_ITEMS: CartItem[] = [
  {
    id: "cart-item-1",
    product: PRODUCTS[0],
    selectedColor: "Onyx Black",
    selectedSize: "L",
    quantity: 1,
    sku: "CLP-MNL-280-BLK"
  },
  {
    id: "cart-item-2",
    product: PRODUCTS[1],
    selectedColor: "Vintage Black",
    selectedSize: "XL",
    quantity: 1,
    sku: "CLP-CYB-09-VNT"
  },
  {
    id: "cart-item-3",
    product: PRODUCTS[3],
    selectedColor: "Charcoal",
    selectedSize: "M",
    quantity: 1,
    sku: "CLP-DST-SWP-CHR"
  }
];
