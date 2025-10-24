// Simple For Advertisers - Debug Version
export const ForAdvertisersSimple = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>For Advertisers | Earnly</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-900 text-white">
        <div class="min-h-screen flex items-center justify-center">
            <div class="text-center">
                <h1 class="text-4xl font-bold mb-4">For Advertisers</h1>
                <p class="text-xl text-gray-300 mb-8">AI-Native Advertising Platform</p>
                <div class="bg-white text-gray-900 p-8 rounded-lg max-w-md mx-auto">
                    <h2 class="text-2xl font-bold mb-4">ROI Calculator</h2>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Monthly Budget</label>
                            <input type="number" value="10000" class="w-full p-2 border rounded">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Average Order Value</label>
                            <input type="number" value="150" class="w-full p-2 border rounded">
                        </div>
                        <div class="mt-6 p-4 bg-blue-600 text-white rounded">
                            <div class="text-lg font-bold">Projected Revenue: $49,200</div>
                            <div class="text-sm">ROAS: 6.62x</div>
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold mr-4">
                        Start Campaign
                    </button>
                    <button class="border border-white text-white px-6 py-3 rounded-lg">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </body>
    </html>
  `
}