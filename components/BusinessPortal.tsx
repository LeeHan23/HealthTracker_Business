/* eslint-disable react/no-unescaped-entities */

"use client"

import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { 
  BarChart2, Users, ShoppingBag, Settings, Bell, Menu, Zap, TrendingUp, ArrowUpRight 
} from 'lucide-react'
import {
Table,
TableBody,
TableCell,
TableHead,
TableHeader,
TableRow,
} from "./ui/table"
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  BarChart,
  Bar,
  LineChart,
  Line
} from 'recharts'

interface RevenueData {
  month: string;
  revenue: number;
}

interface UserActivityData {
  day: string;
  active: number;
}

interface CustomerTrendData {
  month: string;
  customers: number;
}

const revenueData = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 2500 },
  { month: "Mar", revenue: 3000 },
  { month: "Apr", revenue: 2800 },
  { month: "May", revenue: 3200 },
  { month: "Jun", revenue: 3800 },
]

const userActivityData = [
  { day: "Mon", active: 500 },
  { day: "Tue", active: 600 },
  { day: "Wed", active: 800 },
  { day: "Thu", active: 700 },
  { day: "Fri", active: 900 },
]

const customerTrendData = [
  { month: "Jan", customers: 1000 },
  { month: "Feb", customers: 1200 },
  { month: "Mar", customers: 1500 },
  { month: "Apr", customers: 1400 },
  { month: "May", customers: 1600 },
  { month: "Jun", customers: 1800 },
]

function DashboardTab() {
  return (
    <div className="space-y-6">
      {/* Overview Section */}
      <Card className="bg-gradient-to-r from-[#154D57] to-[#154D57]/80">
        <CardHeader>
          <CardTitle className="text-xl text-[#FFFFFF]">Welcome back, Admin!</CardTitle>
          <CardDescription className="text-[#FEFAF7]">
            Here's an overview of your business
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Total Customers */}
            <Card className="bg-[#FFFFFF]">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-[#154D57]">
                  Total Customers
                </CardTitle>
                <Users className="h-4 w-4 text-[#B7A08B]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,000</div>
                <p className="text-xs text-[#B7A08B]">
                  <span className="text-green-500 inline-flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    10%
                  </span>
                  from last month
                </p>
              </CardContent>
            </Card>

            {/* Monthly Revenue */}
            <Card className="bg-[#FFFFFF]">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-[#154D57]">
                  Monthly Revenue
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-[#B7A08B]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$28,500</div>
                <p className="text-xs text-[#B7A08B]">
                  <span className="text-green-500 inline-flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    15%
                  </span>
                  from last month
                </p>
              </CardContent>
            </Card>

            {/* Active Products */}
            <Card className="bg-[#FFFFFF]">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-[#154D57]">
                  Active Products
                </CardTitle>
                <ShoppingBag className="h-4 w-4 text-[#B7A08B]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">125</div>
                <p className="text-xs text-[#B7A08B]">
                  <span className="text-green-500 inline-flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    5%
                  </span>
                  from last month
                </p>
              </CardContent>
            </Card>

            {/* Customer Satisfaction */}
            <Card className="bg-[#FFFFFF]">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-[#154D57]">
                  Customer Satisfaction
                </CardTitle>
                <BarChart2 className="h-4 w-4 text-[#B7A08B]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94%</div>
                <p className="text-xs text-[#B7A08B]">Based on recent surveys</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#154D57]">Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#B7A08B20" />
                  <XAxis dataKey="month" stroke="#154D57" />
                  <YAxis stroke="#154D57" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#B7A08B' }}
                    labelStyle={{ color: '#154D57' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#154D57" 
                    fill="#154D57" 
                    fillOpacity={0.2} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* User Activity Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#154D57]">User Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userActivityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#B7A08B20" />
                  <XAxis dataKey="day" stroke="#154D57" />
                  <YAxis stroke="#154D57" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#B7A08B' }}
                    labelStyle={{ color: '#154D57' }}
                  />
                  <Bar dataKey="active" fill="#B7A08B" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Customer Trends Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#154D57]">Customer Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={customerTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#B7A08B20" />
                  <XAxis dataKey="month" stroke="#154D57" />
                  <YAxis stroke="#154D57" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#B7A08B' }}
                    labelStyle={{ color: '#154D57' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="customers" 
                    stroke="#154D57" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#154D57]">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-[#FEFAF7]">
                <Avatar>
                  <AvatarImage src={`https://i.pravatar.cc/150?img=${index + 1}`} />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-[#154D57]">New customer joined</p>
                  <p className="text-xs text-[#B7A08B]">{index + 2} minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function TrendsTab() {
  const revenueData: RevenueData[] = [
    { month: 'Jan', revenue: 2000 },
    { month: 'Feb', revenue: 2500 },
    { month: 'Mar', revenue: 3000 },
    { month: 'Apr', revenue: 3500 },
    { month: 'May', revenue: 4000 },
    { month: 'Jun', revenue: 4500 },
  ]

  const userActivityData: UserActivityData[] = [
    { day: 'Mon', active: 500 },
    { day: 'Tue', active: 600 },
    { day: 'Wed', active: 800 },
    { day: 'Thu', active: 750 },
    { day: 'Fri', active: 900 },
    { day: 'Sat', active: 700 },
    { day: 'Sun', active: 600 },
  ]

  const customerTrendData: CustomerTrendData[] = [
    { month: 'Jan', customers: 1000 },
    { month: 'Feb', customers: 1200 },
    { month: 'Mar', customers: 1400 },
    { month: 'Apr', customers: 1600 },
    { month: 'May', customers: 1800 },
    { month: 'Jun', customers: 2000 },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Business Trends Overview</CardTitle>
          <CardDescription>Key metrics and trends for your business</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
                <p className="mt-2 text-sm text-muted-foreground">Revenue is showing a steady increase over the past 6 months.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={userActivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="active" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
                <p className="mt-2 text-sm text-muted-foreground">User activity peaks mid-week and dips on weekends.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={customerTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="customers" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
                <p className="mt-2 text-sm text-muted-foreground">Customer base is growing consistently month over month.</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Trend Analysis</CardTitle>
          <CardDescription>Insights and recommendations based on current trends</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Revenue is growing steadily, consider expanding product offerings or services.</li>
            <li>User activity is highest mid-week. Plan promotions and engagement activities accordingly.</li>
            <li>Customer base is expanding. Focus on retention strategies to maintain growth.</li>
            <li>Monitor weekend activity and develop strategies to increase engagement during these periods.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

function CustomersTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer List</CardTitle>
        <CardDescription>Manage and view your customer base</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4, 5].map((i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={`https://i.pravatar.cc/150?img=${i}`} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span>Customer Name {i}</span>
                  </div>
                </TableCell>
                <TableCell>customer{i}@example.com</TableCell>
                <TableCell>{i % 2 === 0 ? 'Active' : 'Inactive'}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function ProductsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Management</CardTitle>
        <CardDescription>Add, edit, or remove products from your store</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="flex items-center space-x-4 p-4">
                <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center">
                  <ShoppingBag className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Product {i}</h3>
                  <p className="text-sm text-muted-foreground">${(19.99 * i).toFixed(2)}</p>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="destructive" size="sm">Remove</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function SettingsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Settings</CardTitle>
        <CardDescription>Manage your business profile and preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="businessName">Business Name</Label>
            <Input id="businessName" defaultValue="HealthTrack Inc." />
          </div>
          <div>
            <Label htmlFor="businessEmail">Business Email</Label>
            <Input id="businessEmail" type="email" defaultValue="contact@healthtrack.com" />
          </div>
          <div>
            <Label htmlFor="supportPhone">Support Phone</Label>
            <Input id="supportPhone" type="tel" defaultValue="+1 (555) 123-4567" />
          </div>
          <div>
            <Label htmlFor="businessAddress">Business Address</Label>
            <Input id="businessAddress" defaultValue="123 Health St, Wellness City, WC 12345" />
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </CardContent>
    </Card>
  )
}

function SpecialCodeTab() {
  const [generatedCode, setGeneratedCode] = useState<string>("")

  const generateCode = () => {
    const code = Math.random().toString(36).substring(2, 10).toUpperCase()
    setGeneratedCode(code)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Special Code Generation</CardTitle>
        <CardDescription>Generate and manage special codes for your customers</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="generatedCode">Generated Special Code</Label>
          <div className="flex space-x-2">
            <Input id="generatedCode" value={generatedCode} readOnly />
            <Button onClick={generateCode}>Generate New Code</Button>
          </div>
        </div>
        <div>
          <Label>Instructions</Label>
          <p className="text-sm text-muted-foreground">
            1. Click the "Generate New Code" button to create a unique code.
            <br />
            2. Share this code with your customer.
            <br />
            3. The customer can enter this code in their app to link their account to your business.
          </p>
        </div>
        <div>
          <Label>Active Codes</Label>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Generated On</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>ABC123XY</TableCell>
                <TableCell>2023-06-15</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>XYZ789AB</TableCell>
                <TableCell>2023-06-14</TableCell>
                <TableCell>Used</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

export default function BusinessPortal() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#FEFAF7] to-[#FFFFFF]">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-14 bg-[#FFFFFF] border-b border-[#B7A08B]/20">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden h-10 w-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5 text-[#154D57]" />
          </Button>
          <div className="flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-[#154D57]" />
            <h1 className="text-base font-semibold text-[#154D57]">HealthTrack</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-9 w-9">
            <Bell className="h-4 w-4 text-[#154D57]" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-[#B7A08B] text-[#FFFFFF]">AD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content with correct padding-top */}
      <div className="flex flex-1 pt-14">
        <Tabs defaultValue="dashboard" className="flex-1 flex h-full">
          {/* Sidebar */}
          <aside className={`
            fixed md:sticky top-14 left-0 h-[calc(100vh-3.5rem)]
            w-64 
            bg-[#FFFFFF] 
            shadow-lg md:shadow-none
            transition-transform duration-200 ease-out
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0
            overflow-y-auto
            z-40
          `}>
            <TabsList className="flex flex-col w-full p-2 gap-1 bg-transparent">
              <TabsTrigger 
                value="dashboard" 
                className="w-full justify-start p-3 text-sm data-[state=active]:bg-[#154D57]/10"
              >
                <BarChart2 className="mr-3 h-4 w-4" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger 
                value="trends" 
                className="w-full justify-start p-3 text-sm data-[state=active]:bg-[#154D57]/10"
              >
                <TrendingUp className="mr-3 h-4 w-4" />
                Trends
              </TabsTrigger>
              <TabsTrigger 
                value="customers" 
                className="w-full justify-start p-3 text-sm data-[state=active]:bg-[#154D57]/10"
              >
                <Users className="mr-3 h-4 w-4" />
                Customers
              </TabsTrigger>
              <TabsTrigger 
                value="products" 
                className="w-full justify-start p-3 text-sm data-[state=active]:bg-[#154D57]/10"
              >
                <ShoppingBag className="mr-3 h-4 w-4" />
                Products
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="w-full justify-start p-3 text-sm data-[state=active]:bg-[#154D57]/10"
              >
                <Settings className="mr-3 h-4 w-4" />
                Settings
              </TabsTrigger>
              <TabsTrigger 
                value="special-code" 
                className="w-full justify-start p-3 text-sm data-[state=active]:bg-[#154D57]/10"
              >
                <Zap className="mr-3 h-4 w-4" />
                Special Code
              </TabsTrigger>
            </TabsList>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto p-6 md:pl-64">
            <TabsContent value="dashboard" className="mt-0">
              <DashboardTab />
            </TabsContent>
            <TabsContent value="trends" className="mt-0">
              <TrendsTab />
            </TabsContent>
            <TabsContent value="customers">
              <CustomersTab />
            </TabsContent>
            <TabsContent value="products">
              <ProductsTab />
            </TabsContent>
            <TabsContent value="settings">
              <SettingsTab />
            </TabsContent>
            <TabsContent value="special-code">
              <SpecialCodeTab />
            </TabsContent>
          </main>
        </Tabs>
      </div>
    </div>
  )
}