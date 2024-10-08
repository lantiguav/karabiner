import { KarabinerRules } from "./types";

const spanishKeymaps: KarabinerRules[] = [{
  description: "left option + a = á",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "a",
        modifiers: {
          mandatory: [
            "left_alt"
          ]
        }
      },
      to: [
        {
          key_code: "e",
          modifiers: [
            "left_alt"
          ]
        },
        {
          key_code: "a"
        }
      ]
    }
  ]
},
{
  description: "left option + e = é",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "e",
        modifiers: {
          mandatory: [
            "left_alt"
          ]
        }
      },
      to: [
        {
          key_code: "e",
          modifiers: [
            "left_alt"
          ]
        },
        {
          key_code: "e"
        }
      ]
    }
  ]
},
{
  description: "left option + i = í",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "i",
        modifiers: {
          mandatory: [
            "left_alt"
          ]
        }
      },
      to: [
        {
          key_code: "e",
          modifiers: [
            "left_alt"
          ]
        },
        {
          key_code: "i"
        }
      ]
    }
  ]
},
{
  description: "left option + o = ó",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "o",
        modifiers: {
          mandatory: [
            "left_alt"
          ]
        }
      },
      to: [
        {
          key_code: "e",
          modifiers: [
            "left_alt"
          ]
        },
        {
          key_code: "o"
        }
      ]
    }
  ]
},
{
  description: "left option + u = ú",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "u",
        modifiers: {
          mandatory: [
            "left_alt"
          ]
        }
      },
      to: [
        {
          key_code: "e",
          modifiers: [
            "left_alt"
          ]
        },
        {
          key_code: "u"
        }
      ]
    }
  ]
},
{
  description: "left option + n = ñ",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "n",
        modifiers: {
          mandatory: [
            "left_alt"
          ]
        }
      },
      to: [
        {
          key_code: "n",
          modifiers: [
            "left_alt"
          ]
        },
        {
          key_code: "n"
        }
      ]
    }
  ]
},
{
  description: "left option + slash = ¿",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "slash",
        modifiers: {
          mandatory: [
            "left_alt"
          ]
        }
      },
      to: [
        {
          key_code: "slash",
          modifiers: [
            "left_shift",
            "left_alt"
          ]
        }
      ]
    }
  ]
},
{
  description: "right option + a = á",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "a",
        modifiers: {
          mandatory: [
            "right_alt"
          ]
        }
      },
      to: [
        {
          key_code: "e",
          modifiers: [
            "right_alt"
          ]
        },
        {
          key_code: "a"
        }
      ]
    }
  ]
},
{
  description: "right option + e = é",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "e",
        modifiers: {
          mandatory: [
            "right_alt"
          ]
        }
      },
      to: [
        {
          key_code: "e",
          modifiers: [
            "right_alt"
          ]
        },
        {
          key_code: "e"
        }
      ]
    }
  ]
},
{
  description: "right option + i = í",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "i",
        modifiers: {
          mandatory: [
            "right_alt"
          ]
        }
      },
      to: [
        {
          key_code: "e",
          modifiers: [
            "right_alt"
          ]
        },
        {
          key_code: "i"
        }
      ]
    }
  ]
},
{
  description: "right option + o = ó",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "o",
        modifiers: {
          mandatory: [
            "right_alt"
          ]
        }
      },
      to: [
        {
          key_code: "e",
          modifiers: [
            "right_alt"
          ]
        },
        {
          key_code: "o"
        }
      ]
    }
  ]
},
{
  description: "right option + u = ú",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "u",
        modifiers: {
          mandatory: [
            "right_alt"
          ]
        }
      },
      to: [
        {
          key_code: "e",
          modifiers: [
            "right_alt"
          ]
        },
        {
          key_code: "u"
        }
      ]
    }
  ]
},
{
  description: "right option + n = ñ",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "n",
        modifiers: {
          mandatory: [
            "right_alt"
          ]
        }
      },
      to: [
        {
          key_code: "n",
          modifiers: [
            "right_alt"
          ]
        },
        {
          key_code: "n"
        }
      ]
    }
  ]
},
{
  description: "right option + slash = ¿",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "slash",
        modifiers: {
          mandatory: [
            "right_alt"
          ]
        }
      },
      to: [
        {
          key_code: "slash",
          modifiers: [
            "right_shift",
            "right_alt"
          ]
        }
      ]
    }
  ]
}]

export default spanishKeymaps;
