import sys
try:
    from PIL import Image
    from collections import Counter
    
    def rgb_to_hex(rgb):
        return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])
        
    img = Image.open('public/ivtc_new_logo.png')
    img = img.resize((50, 50))
    # converting to 'P' (palette-based) to drastically reduce number of colors and find dominant
    result = img.convert('P', palette=Image.ADAPTIVE, colors=5)
    result = result.convert('RGB')
    colors = result.getcolors(50*50)
    # Filter out white/transparent if possible (assuming white bg)
    # Sort by count
    colors.sort(key=lambda x: x[0], reverse=True)
    
    # Simple heuristic: pick the most common non-white/non-black color
    for count, color in colors:
        if 20 < color[0] < 235 or 20 < color[1] < 235 or 20 < color[2] < 235:
           # Also avoid pure grays if possible
           if abs(color[0] - color[1]) > 10 or abs(color[1] - color[2]) > 10:
               print(rgb_to_hex(color))
               break
    else:
        # Fallback
        print(rgb_to_hex(colors[0][1]))
        
except Exception as e:
    print(f"Error: {e}")
