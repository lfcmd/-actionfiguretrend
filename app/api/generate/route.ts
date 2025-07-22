import { NextRequest, NextResponse } from 'next/server'
import Replicate from 'replicate'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

export async function POST(request: NextRequest) {
  try {
    const { image, style } = await request.json()
    
    // Validate input
    if (!image) {
      return NextResponse.json({ 
        success: false, 
        error: 'No image provided' 
      }, { status: 400 })
    }

    // Build multiple prompt variations for better results
    const primaryPrompt = buildPrompt(style)
    const enhancedPrompt = buildEnhancedPrompt(style, primaryPrompt)
    
    console.log('Primary prompt:', primaryPrompt)
    console.log('Enhanced prompt:', enhancedPrompt)
    
    // Call Replicate API with enhanced prompt
    const input = {
      prompt: enhancedPrompt,
      input_image: image,
      output_format: "jpg",
      num_inference_steps: 28, // Higher steps for better quality
      guidance_scale: 7.5, // Better adherence to prompt
      strength: 0.8 // Balance between input image and prompt
    }

    const output = await replicate.run("black-forest-labs/flux-kontext-pro", { input })
    
    return NextResponse.json({ 
      success: true, 
      imageUrl: output 
    })
    
  } catch (error) {
    console.error('API Error:', error)
    
    // Provide more specific error messages
    let errorMessage = 'Generation failed, please try again later'
    
    if (error instanceof Error) {
      if (error.message.includes('rate limit')) {
        errorMessage = 'Too many requests. Please wait a moment and try again.'
      } else if (error.message.includes('invalid image')) {
        errorMessage = 'Invalid image format. Please upload a clear photo.'
      } else if (error.message.includes('timeout')) {
        errorMessage = 'Generation timed out. Try with fewer accessories.'
      }
    }
    
    return NextResponse.json({ 
      success: false, 
      error: errorMessage 
    }, { status: 500 })
  }
}

function buildPrompt(style: any) {
  const { theme, accessories, label } = style
  
  // Build a comprehensive prompt for action figure generation
  let prompt = "Create a detailed collectible action figure in vintage toy packaging, 90s style blister pack with cardboard backing, vibrant colors, professional toy photography"
  
  // Add theme if specified
  if (theme) {
    prompt += `, figure styled as ${theme}`
  }
  
  // Add accessories with more detailed descriptions and emphasis
  if (accessories && accessories.length > 0) {
    // Create detailed accessory descriptions with positioning hints
    const accessoryDescriptions = accessories.map((accessory, index) => {
      const position = index === 0 ? 'prominently' : index === 1 ? 'clearly' : 'visibly'
      
      switch(accessory.toLowerCase()) {
        case 'guitar': return `${position} holding a detailed miniature electric guitar in hands`
        case 'microphone': return `${position} displaying a microphone (handheld or on stand)`
        case 'sunglasses': return `${position} wearing stylish sunglasses on face`
        case 'camera': return `${position} holding a small professional camera`
        case 'phone': return `${position} with smartphone accessory in hand or pocket`
        case 'headset': return `${position} wearing gaming headset with visible microphone`
        case 'controller': return `${position} holding game controller in hands`
        case 'keyboard': return `${position} with miniature keyboard accessory`
        case 'makeup': return `${position} with makeup kit and brushes visible`
        case 'handbag': return `${position} carrying fashionable handbag`
        case 'dumbbells': return `${position} holding miniature dumbbells in both hands`
        case 'water bottle': return `${position} with sports water bottle accessory`
        case 'paintbrush': return `${position} holding artist paintbrush in hand`
        case 'palette': return `${position} with colorful art palette in hand`
        case 'chef hat': return `${position} wearing white chef hat on head`
        case 'briefcase': return `${position} carrying professional briefcase`
        case 'laptop': return `${position} with miniature laptop computer open`
        case 'watch': return `${position} wearing detailed wristwatch on wrist`
        case 'mask': return `${position} wearing superhero mask on face`
        case 'cape': return `${position} with flowing superhero cape attached`
        case 'telescope': return `${position} holding telescope in hands`
        case 'sword': return `${position} wielding detailed sword weapon`
        case 'tripod': return `${position} with camera tripod accessory nearby`
        case 'mouse': return `${position} with computer mouse accessory`
        case 'perfume': return `${position} with perfume bottle accessory`
        case 'towel': return `${position} with sports towel draped or held`
        case 'canvas': return `${position} with miniature art canvas displayed`
        case 'pan': return `${position} holding cooking pan in hand`
        case 'knife set': return `${position} with chef knife set visible`
        case 'backpack': return `${position} wearing travel backpack on back`
        case 'map': return `${position} holding folded map in hands`
        case 'test tube': return `${position} holding scientific test tubes`
        case 'microscope': return `${position} with miniature microscope accessory`
        case 'lab coat': return `${position} wearing white lab coat`
        case 'badge': return `${position} with hero badge on chest`
        case 'hat': return `${position} wearing distinctive hat on head`
        case 'books': return `${position} with miniature books accessory`
        case 'coffee cup': return `${position} holding coffee cup in hand`
        case 'glasses': return `${position} wearing eyeglasses on face`
        case 'necklace': return `${position} wearing necklace around neck`
        case 'ring': return `${position} wearing ring on finger`
        case 'bracelet': return `${position} wearing bracelet on wrist`
        case 'wallet': return `${position} with wallet accessory`
        case 'keys': return `${position} with key chain accessory`
        case 'charger': return `${position} with phone charger accessory`
        default: return `${position} with ${accessory.toLowerCase()} accessory clearly visible`
      }
    })
    
    // Create a strong emphasis on ALL accessories being present
    prompt += `. IMPORTANT: This action figure MUST display ALL ${accessories.length} accessories simultaneously: ${accessoryDescriptions.join(', ')}. Every single accessory must be clearly visible, detailed, and properly positioned on or with the figure`
    
    // Add redundant emphasis for critical accessories
    if (accessories.length > 1) {
      prompt += `. Ensure no accessory is missing - all ${accessories.length} items (${accessories.join(', ')}) must appear in the final image`
    }
  }
  
  // Add label if specified
  if (label) {
    prompt += `, toy package labeled "${label}"`
  }
  
  // Add detailed style specifications with strong emphasis on completeness
  prompt += ". High-quality collectible action figure, professional toy photography, studio lighting, mint condition blister pack packaging, all accessories must be present and clearly visible, detailed miniature scale, vibrant colors, sharp focus on figure and all accessories"
  
  console.log('Generated prompt:', prompt) // Debug log
  
  return prompt
}

function buildEnhancedPrompt(style: any, primaryPrompt: string) {
  const { accessories, theme } = style
  
  // Create an enhanced version with additional emphasis and negative prompts
  let enhancedPrompt = primaryPrompt
  
  // Add specific emphasis for accessories with detailed positioning
  if (accessories && accessories.length > 0) {
    enhancedPrompt += `. MANDATORY REQUIREMENTS: This action figure MUST include ALL ${accessories.length} accessories without exception: ${accessories.join(', ')}. Each accessory must be clearly visible, properly scaled, and positioned logically on the figure`
    
    // Add specific positioning guidance for each accessory type
    const positioningInstructions = []
    
    accessories.forEach(accessory => {
      switch(accessory.toLowerCase()) {
        case 'guitar':
          positioningInstructions.push('Guitar must be held in both hands or strapped across body')
          break
        case 'microphone':
          positioningInstructions.push('Microphone must be clearly visible in hand, on stand, or clipped to figure')
          break
        case 'sunglasses':
          positioningInstructions.push('Sunglasses must be worn on face, clearly visible')
          break
        case 'camera':
          positioningInstructions.push('Camera must be held in hands or hanging from neck strap')
          break
        case 'headset':
          positioningInstructions.push('Headset must be worn on head with visible microphone boom')
          break
        case 'controller':
          positioningInstructions.push('Game controller must be held in both hands')
          break
        case 'laptop':
          positioningInstructions.push('Laptop must be open and positioned in front of figure')
          break
        case 'phone':
          positioningInstructions.push('Phone must be held in hand or positioned nearby')
          break
        case 'briefcase':
          positioningInstructions.push('Briefcase must be carried in hand or placed beside figure')
          break
        case 'mask':
          positioningInstructions.push('Mask must be worn on face, covering appropriate area')
          break
        case 'cape':
          positioningInstructions.push('Cape must be attached to shoulders and flowing behind figure')
          break
        case 'chef hat':
          positioningInstructions.push('Chef hat must be worn on head, white and tall')
          break
        case 'lab coat':
          positioningInstructions.push('Lab coat must be worn over regular clothing, white and clean')
          break
        case 'glasses':
          positioningInstructions.push('Glasses must be worn on face, clearly visible')
          break
      }
    })
    
    if (positioningInstructions.length > 0) {
      enhancedPrompt += `. POSITIONING REQUIREMENTS: ${positioningInstructions.join('. ')}`
    }
    
    // Add compatibility-based instructions
    if (accessories.includes('Guitar') && accessories.includes('Microphone')) {
      enhancedPrompt += ". SPECIAL NOTE: For guitar and microphone combination, position guitar in hands and microphone on a stand nearby, or have microphone attached to figure while guitar is strapped"
    }
    
    if (accessories.includes('Camera') && accessories.includes('Tripod')) {
      enhancedPrompt += ". SPECIAL NOTE: Camera should be mounted on tripod or figure holding camera with tripod nearby"
    }
    
    // Add verification instruction
    enhancedPrompt += `. VERIFICATION: Before finalizing, ensure ALL ${accessories.length} accessories (${accessories.join(', ')}) are present and clearly visible in the image`
  }
  
  // Add theme-specific enhancements
  if (theme) {
    enhancedPrompt += `. THEME CONSISTENCY: All accessories and figure styling must be consistent with the ${theme} theme`
  }
  
  // Add negative prompts to avoid common issues
  enhancedPrompt += ". AVOID: blurry accessories, missing items, incorrectly scaled objects, poor lighting on accessories, accessories that blend into background, incomplete or partial accessories, accessories that look like part of the figure's body"
  
  // Add quality and style reinforcement
  enhancedPrompt += ". FINAL REQUIREMENTS: Professional collectible action figure photography, perfect lighting on all accessories, sharp focus on figure and ALL accessories, vibrant colors, mint condition packaging, museum quality presentation, each accessory must be immediately recognizable"
  
  return enhancedPrompt
}