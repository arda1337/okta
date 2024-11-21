'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Menu, MoreHorizontal, Plus   } from 'lucide-react'

export default function CloudflareUserLookup() {
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [searchResults] = useState<string[]>([])

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Top Navigation - Mobile friendly */}
      <div className="sticky top-0 bg-white border-b border-[#E5E7EB] z-10">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-full md:hidden">
                <Menu className="w-5 h-5" />
              </button>
              <div className="flex items-center">
                <svg width="103" height="32" viewBox="0 0 103 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.6032 0.226701L16.9464 8.33185L16.9474 8.3328C16.6365 8.29478 16.3219 8.2734 16.0011 8.2734C15.6019 8.2734 15.2088 8.30381 14.8258 8.36227L14.4527 4.43184C14.4413 4.30922 14.5382 4.20181 14.6623 4.20371H15.3338L15.0102 0.227176C14.9992 0.105509 15.0957 0 15.2188 0H17.3946C17.5162 0 17.6127 0.104558 17.6032 0.226701ZM12.112 0.62925C12.0797 0.511384 11.9533 0.445798 11.8383 0.488096L9.79368 1.23283C9.67867 1.27466 9.62401 1.40631 9.67486 1.51752L11.3383 5.14331L10.7067 5.37143C10.5907 5.41326 10.5351 5.54681 10.5888 5.65897L12.2836 9.22487C12.8986 8.88649 13.5639 8.63127 14.2664 8.47063L12.112 0.62925ZM7.09038 2.88628L11.796 9.51669L11.7969 9.51764C11.2005 9.90545 10.6606 10.3736 10.1929 10.9064L7.37839 8.13367C7.28951 8.04717 7.29664 7.90269 7.39122 7.8238L7.90593 7.39321L5.1033 4.55493C5.01775 4.46843 5.02441 4.32585 5.11803 4.24696L6.78431 2.84731C6.87889 2.76841 7.01909 2.78695 7.09038 2.88628ZM3.14283 6.72451C3.04255 6.65512 2.9033 6.68649 2.84152 6.79152L1.75411 8.67642C1.6928 8.78288 1.73558 8.91833 1.84584 8.97061L5.45024 10.6792L5.11328 11.26C5.05102 11.3674 5.09474 11.5047 5.20786 11.556L8.79895 13.1981C9.05892 12.5303 9.40681 11.9077 9.8317 11.3455L3.14283 6.72451ZM0.487535 11.8479C0.508921 11.7271 0.627737 11.6501 0.746553 11.681L8.6117 13.7356C8.40781 14.4 8.29422 15.1029 8.27854 15.831L4.3405 15.515C4.21693 15.505 4.12901 15.391 4.15039 15.2693L4.26826 14.6087L0.297429 14.2365C0.175761 14.2247 0.088788 14.1115 0.110175 13.9908L0.487535 11.8479ZM0.190495 17.1594C0.068827 17.1713 -0.0181464 17.2844 0.00324043 17.4051L0.381551 19.5486C0.402938 19.6693 0.522704 19.7463 0.64057 19.7154L4.49971 18.7069L4.61473 19.3675C4.63611 19.4892 4.75778 19.5661 4.87707 19.5333L8.68346 18.4825C8.45914 17.8229 8.32084 17.1252 8.28376 16.399L0.19097 17.1604L0.190495 17.1594ZM1.44947 22.7918C1.38816 22.6853 1.42998 22.5499 1.54119 22.4971L8.88497 19.0148C9.16443 19.6736 9.53419 20.2847 9.97618 20.8346L6.75769 23.124C6.65741 23.1962 6.51578 23.1648 6.45447 23.0579L6.12036 22.4762L2.83914 24.7441C2.73791 24.8145 2.59961 24.7831 2.53782 24.6771L1.44947 22.7918ZM10.3474 21.2647L4.63516 27.052C4.54962 27.1385 4.55627 27.2811 4.6499 27.36L6.31712 28.7587C6.41075 28.8376 6.5519 28.8191 6.62319 28.7197L8.9306 25.4665L9.44436 25.8995C9.53894 25.9794 9.68199 25.9599 9.75233 25.8586L11.9927 22.6083C11.3849 22.2381 10.8321 21.7847 10.3488 21.2671L10.3474 21.2647ZM9.21908 30.5576C9.10407 30.5158 9.04942 30.3841 9.10027 30.2729L12.4894 22.8816C13.1129 23.2005 13.7854 23.4381 14.4931 23.5783L13.4993 27.3999C13.4679 27.5197 13.3406 27.5872 13.2246 27.5444L12.5939 27.3134L11.5374 31.1602C11.5051 31.2781 11.3787 31.3437 11.2637 31.3014L9.21908 30.5576ZM15.0539 23.6672L14.3971 31.7728C14.3876 31.8945 14.4836 32 14.6057 32H16.7815C16.9046 32 17.0006 31.8945 16.9901 31.7728L16.6665 27.7963H17.338C17.4616 27.7982 17.559 27.6908 17.5476 27.5682L17.1745 23.6377C16.7915 23.6962 16.3989 23.7261 15.9992 23.7261C15.6789 23.7261 15.3642 23.7052 15.0539 23.6672ZM22.9005 1.72521C22.9514 1.614 22.8967 1.48235 22.7817 1.44053L20.7371 0.696737C20.6221 0.654914 20.4957 0.720025 20.4634 0.837891L19.4068 4.68468L18.7762 4.4537C18.6602 4.41093 18.5324 4.47794 18.5015 4.5977L17.5077 8.4193C18.2154 8.5595 18.8874 8.79761 19.5114 9.11604L22.9005 1.72521ZM27.3656 4.94655L21.6534 10.7338L21.6525 10.7319C21.1691 10.2144 20.6169 9.76145 20.0085 9.39074L22.2489 6.14041C22.3193 6.03918 22.4623 6.01969 22.5569 6.09954L23.0707 6.53203L25.3781 3.27885C25.4493 3.17952 25.5905 3.16098 25.6841 3.23987L27.3514 4.63858C27.445 4.71747 27.4512 4.86005 27.3656 4.94655ZM30.4596 9.501C30.5708 9.44825 30.6126 9.3128 30.5513 9.20681L29.463 7.32192C29.4016 7.21546 29.2633 7.18457 29.1616 7.25443L25.8804 9.52239L25.5463 8.94067C25.485 8.83326 25.3438 8.80236 25.2431 8.8746L22.0246 11.164C22.4671 11.7138 22.8364 12.3245 23.1163 12.9837L30.4596 9.501ZM31.6183 12.451L31.9966 14.5944L31.9975 14.5954C32.0189 14.7161 31.9324 14.8292 31.8103 14.8411L23.7165 15.6015C23.6795 14.8753 23.5412 14.1776 23.3173 13.5179L27.1237 12.4671C27.2425 12.4339 27.3642 12.5108 27.386 12.633L27.5011 13.2936L31.3602 12.2851C31.4781 12.2537 31.5978 12.3307 31.6192 12.4519L31.6183 12.451ZM31.2528 20.3171C31.3716 20.3484 31.4904 20.2714 31.5118 20.1502L31.8892 18.0073C31.9106 17.8866 31.8241 17.7734 31.7019 17.7616L27.7311 17.3894L27.849 16.7288C27.8703 16.6071 27.7829 16.4931 27.6589 16.4831L23.7213 16.1671C23.7056 16.8952 23.5906 17.5981 23.3881 18.2625L31.2533 20.3161L31.2528 20.3171ZM29.1578 25.2066C29.0965 25.3121 28.9573 25.343 28.857 25.2736L28.8579 25.2726L22.1681 20.6521C22.593 20.0899 22.9409 19.4673 23.2009 18.7995L26.792 20.4421C26.9051 20.4939 26.9488 20.6312 26.8865 20.7381L26.5491 21.3189L30.154 23.0275C30.2642 23.0802 30.307 23.2157 30.2457 23.3217L29.1578 25.2066ZM20.2034 22.4814L24.909 29.1128C24.9803 29.2121 25.1205 29.2306 25.215 29.1517L26.8813 27.7521C26.9749 27.6732 26.9816 27.5306 26.8961 27.4441L24.0934 24.6063L24.6081 24.1757C24.7027 24.0968 24.7094 23.9524 24.621 23.8659L21.8069 21.0932C21.3393 21.6264 20.7998 22.0936 20.2034 22.4814ZM20.1625 31.5105C20.0475 31.5523 19.9206 31.4872 19.8888 31.3693L17.7344 23.5284C18.4368 23.3678 19.1027 23.1121 19.7177 22.7742L21.412 26.3401C21.4657 26.4522 21.4101 26.5858 21.2941 26.6276L20.6625 26.8557L22.3259 30.4815C22.3768 30.5927 22.3221 30.7244 22.2071 30.7662L20.1625 31.5105Z" fill="black" />
                  <path d="M93.7706 20.7961C91.0858 20.7961 89.1876 18.7083 89.1876 15.9693C89.1876 13.2304 91.0858 11.1425 93.7706 11.1425C96.4553 11.1425 98.2994 13.2304 98.2994 15.9693C98.2994 18.7083 96.4283 20.7961 93.7706 20.7961ZM93.3367 23.6705C95.5062 23.6705 97.3503 22.8298 98.5161 21.067C98.7328 22.7756 99.9804 23.3991 101.553 23.3991H102.801V20.6873H102.258C101.363 20.6873 101.147 20.2533 101.147 19.2501V8.53856H98.2723V10.7352C97.2961 9.18967 95.4521 8.26766 93.3371 8.26766C89.5678 8.26766 86.097 11.4134 86.097 15.9688C86.097 20.5242 89.5673 23.6705 93.3367 23.6705ZM78.5308 19.9554C78.5308 22.3958 80.0492 23.3991 81.8662 23.3991H85.3641V20.6873H82.8153C81.7578 20.6873 81.5406 20.2804 81.5406 19.2501V11.2504H85.3641V8.53856H81.5406V3.54877H78.5308V19.9554ZM64.8365 23.3991H67.8464V17.0268H68.8496L73.9749 23.3991H77.7713L71.2359 15.3182L76.2528 8.53904H72.8632L68.7684 14.2607H67.8464V3.54972H64.8365V23.3991ZM55.0741 8.26766C50.8709 8.26766 47.4 11.4134 47.4 15.9688C47.4 20.5242 50.8709 23.67 55.0741 23.67C59.2773 23.67 62.7482 20.5242 62.7482 15.9688C62.7482 11.4134 59.2773 8.26766 55.0741 8.26766ZM55.0741 20.7961C52.3893 20.7961 50.4911 18.7083 50.4911 15.9693C50.4911 13.2304 52.3893 11.1425 55.0741 11.1425C57.7589 11.1425 59.6571 13.2304 59.6571 15.9693C59.6571 18.7083 57.7589 20.7961 55.0741 20.7961Z" fill="black" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="md:hidden">
                <MoreHorizontal className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Global Search - Hidden on mobile */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
          <Input 
            className="pl-10 bg-white border-[#E5E7EB] focus:ring-[#5865F2] focus:border-[#5865F2]" 
            placeholder="Search for people, apps and groups" 
          />
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg border border-[#E5E7EB]">
          <div className="p-4 md:p-6">
            <h1 className="text-xl md:text-2xl font-semibold mb-6 text-[#111827]">Lookup Cloudflare Users</h1>
            
            <Tabs defaultValue="accounts" className="space-y-4">
              <TabsList className="w-full justify-start border-b border-[#E5E7EB]">
                <TabsTrigger 
                  value="users" 
                  className="flex-1 md:flex-none data-[state=active]:text-[#5865F2] data-[state=active]:border-[#5865F2]"
                >
                  Users
                </TabsTrigger>
                <TabsTrigger 
                  value="domains" 
                  className="flex-1 md:flex-none data-[state=active]:text-[#5865F2] data-[state=active]:border-[#5865F2]"
                >
                  Domains
                </TabsTrigger>
              </TabsList>

              <TabsContent value="users" className="space-y-4">
                {/* Search Field */}
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Input 
                      placeholder="Search..." 
                      className="pr-12 border-[#E5E7EB] focus:ring-[#5865F2] focus:border-[#5865F2]"
                    />
                    <Button 
                      size="icon" 
                      className="absolute right-1 top-1/2 -translate-y-1/2 hover:bg-[#F3F4F6]"
                    >
                      <Search className="w-4 h-4 text-[#6B7280]" />
                    </Button>
                  </div>
                </div>

                {/* Advanced Search and Button */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="text-[#5865F2] hover:underline text-sm"
                  >
                    Advanced search {showAdvanced ? '▼' : '▶'}
                  </button>
                  <Button 
                    className="w-full md:w-auto gap-2 bg-[#5865F2] text-white hover:bg-[#4752C4]" 
                    variant="outline"
                  >
                    <Plus className="w-4 h-4" />
                    Create Agent Request
                  </Button>
                </div>

                {/* Advanced Search Panel */}
                {showAdvanced && (
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 py-2 bg-[#F9FAFB] p-4 rounded-lg">
                    <span className="text-sm text-[#6B7280]">User source type</span>
                    <Select defaultValue="existing">
                      <SelectTrigger className="w-full md:w-[200px] border-[#E5E7EB] focus:ring-[#5865F2] focus:border-[#5865F2]">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="existing">Existing Users</SelectItem>
                        <SelectItem value="new">New Users</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="text-sm text-[#6B7280] ml-auto">0 results</span>
                  </div>
                )}

                {/* Table - Scrollable on mobile */}
                <div className="overflow-x-auto -mx-4 md:mx-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-[#E5E7EB]">
                        <TableHead className="text-[#6B7280]">Detail</TableHead>
                        <TableHead className="text-[#6B7280]">Status</TableHead>
                        <TableHead className="text-[#6B7280]">Note</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {searchResults.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={3} className="ml-12 text-center py-12 text-gray-500">
                            <div className="space-y-3">
                              <div className="font-mono text-xs opacity-50">
                                01101110<br />
                                01101111<br />
                                01110100
                              </div>
                              <div>No users found.</div>
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : (
                        searchResults.map((result, index) => (
                          <TableRow key={index}>
                            <TableCell>{result}</TableCell>
                            <TableCell>
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Active
                              </span>
                            </TableCell>
                            <TableCell>-</TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="domains">
                <div className="py-12 text-center text-gray-500">
                  No domains configured yet
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}