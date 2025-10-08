'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Image from 'next/image';
export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-center mb-10 space-x-2">
        <Input placeholder="Search creators, tags, or videos..." className="w-96" />
        <Button>
          <Search className="h-4 w-4 mr-2" /> Search
      </Button>
      </div>

      <h2 className="text-2xl font-bold mb-6">🌟 Trending Tags</h2>
      <div className="flex flex-wrap gap-3 mb-12">
        {['Fitness', 'Cosplay', 'Lifestyle', 'Cooking', 'Dance', 'Music'].map((tag) => (
          <Badge key={tag} className="px-4 py-2 text-lg">
            #{tag}
          </Badge>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">✨ Discover New Creators</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="hover:shadow-lg transition">
            <CardContent className="p-4">
              <Image
                unoptimized
                width={300}
                height={400}
                src={`https://picsum.photos/seed/discover${i}/400/300`}
                alt="Creator"
                className="rounded-lg mb-4"
              />
              <h3 className="font-semibold">Creator {i}</h3> <p className="text-sm text-gray-500 mb-2">Lifestyle | Fashion</p>
              <div className="flex gap-2 mb-3">
                <Badge>Trending</Badge> <Badge variant="secondary">HD</Badge>
              </div>
              <Button className="w-full">View Profile</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
